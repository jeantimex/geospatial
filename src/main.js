import * as THREE from 'three';
import {
    Vector3,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    PlaneGeometry,
    HalfFloatType
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer, EffectPass, RenderPass, ToneMappingEffect, ToneMappingMode } from 'postprocessing';
import {
    PrecomputedTexturesLoader,
    SkyMaterial,
    SkyLightProbe,
    SunDirectionalLight,
    AerialPerspectiveEffect,
    getSunDirectionECEF,
    getMoonDirectionECEF
} from '@takram/three-atmosphere';

// --- Basic Scene Setup ---
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000000);
const renderer = new WebGLRenderer({
    antialias: true,
    precision: 'highp' // Maintain high precision
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // Ensure correct color space if needed
document.getElementById('app').appendChild(renderer.domElement); // Add canvas to page

// --- Camera Position (Example: Orbiting slightly above surface) ---
const earthRadius = 6371000; // Approx radius
camera.position.set(earthRadius + 10000, 0, 0); // Positioned 10km above equator on X-axis
camera.lookAt(0, 0, 0);

// --- Add OrbitControls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Optional: adds smooth camera movement
controls.dampingFactor = 0.05; // Optional: damping intensity
controls.screenSpacePanning = false; // Optional: prevents panning off screen
controls.minDistance = earthRadius + 100; // Optional: prevent zooming too close
controls.maxDistance = earthRadius * 3; // Optional: prevent zooming too far

// --- Atmosphere Components ---
// Define the ECEF position for atmosphere components
const position = new Vector3(earthRadius, 0, 0); // Example: Position on the surface

// SkyMaterial disables projection. Provide a plane that covers clip space.
const skyMaterial = new SkyMaterial()
const sky = new Mesh(new PlaneGeometry(2, 2), skyMaterial)
sky.frustumCulled = false
// Sky doesn't need a position if it covers the clip space
// sky.position.copy(position) // Might not be necessary
scene.add(sky)

// SkyLightProbe computes sky irradiance of its position.
const skyLight = new SkyLightProbe()
skyLight.intensity = 2.0; // Default is 1.0, let's try doubling it
skyLight.position.copy(position)
scene.add(skyLight)

// SunDirectionalLight computes sunlight transmittance to its target position.
const sunLight = new SunDirectionalLight()
sunLight.target.position.copy(position)
scene.add(sunLight)
scene.add(sunLight.target)

// Demonstrates forward lighting here. For deferred lighting, set sunIrradiance
// and skyIrradiance to true, remove SkyLightProbe and SunDirectionalLight, and
// provide a normal buffer to AerialPerspectiveEffect.
const aerialPerspective = new AerialPerspectiveEffect(camera)

// Use floating-point render buffer, as radiance/luminance is stored here.
const composer = new EffectComposer(renderer, {
  frameBufferType: HalfFloatType
})
composer.addPass(new RenderPass(scene, camera))
composer.addPass(
  new EffectPass(
    camera,
    aerialPerspective,
    // Revert ToneMapping back to ACES for now as AGX might still cause issues
    new ToneMappingEffect({ mode: ToneMappingMode.ACES })
  )
)

let texturesLoaded = false; // Flag to track texture loading
const texturesLoader = new PrecomputedTexturesLoader()
texturesLoader.setTypeFromRenderer(renderer)
console.log('Loading textures from /assets ...'); // Add log
texturesLoader.load('/assets', textures => {
  console.log('Textures loaded successfully.'); // Add log
  console.log('Loaded Textures Object:', textures); // Log the textures object

  let allTexturesFound = true;
  if (!textures.transmittanceTexture) {
      console.error('Transmittance texture NOT FOUND in loaded data!');
      allTexturesFound = false;
  }
  if (!textures.irradianceTexture) {
      console.error('Irradiance texture NOT FOUND in loaded data!');
      allTexturesFound = false;
  }
  // Scattering texture is used by SkyMaterial and AerialPerspective
  if (!textures.scatteringTexture) {
      console.error('Scattering texture NOT FOUND in loaded data!'); 
      allTexturesFound = false;
  }

  if(allTexturesFound) {
      console.log('All required textures seem to be present.');
  }

  Object.assign(skyMaterial, textures)
  skyMaterial.needsUpdate = true; // Important for SkyMaterial
  sunLight.transmittanceTexture = textures.transmittanceTexture
  skyLight.irradianceTexture = textures.irradianceTexture
  Object.assign(aerialPerspective, textures)
  texturesLoaded = true; // Set flag
  console.log('Textures applied.'); // Add log
}, undefined, (error) => {
    console.error('Error loading atmosphere textures:', error);
    alert('Failed to load atmosphere textures. Check console.');
});

const sunDirection = new Vector3()
const moonDirection = new Vector3()
const date = new Date(); // Define date object

function renderLoop() {
  requestAnimationFrame(renderLoop); // Standard animation loop

  // Update controls
  controls.update(); // Required if enableDamping is true

  // Only render if textures are loaded
  if (!texturesLoaded) {
      // Maybe render a plain background while waiting?
      // renderer.setClearColor(0x000000);
      // renderer.clear();
      return;
  }

  // Update time for sun/moon direction
  date.setTime(Date.now());

  // Update directions
  getSunDirectionECEF(date, sunDirection)
  getMoonDirectionECEF(date, moonDirection)

  // Apply directions
  skyMaterial.sunDirection.copy(sunDirection)
  skyMaterial.moonDirection.copy(moonDirection)
  sunLight.sunDirection.copy(sunDirection)
  skyLight.sunDirection.copy(sunDirection)
  aerialPerspective.sunDirection.copy(sunDirection)

  // Update lights before rendering
  sunLight.update()
  skyLight.update()

  // Render using the composer
  composer.render()
}

// --- Handle Window Resize ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
renderLoop(); 