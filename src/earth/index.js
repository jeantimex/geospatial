import '../styles.css'; // Import the CSS file

import {
  EffectComposer,
  EffectPass,
  RenderPass,
  ToneMappingEffect,
  ToneMappingMode,
} from 'postprocessing'
import {
  HalfFloatType,
  Mesh,
  NoToneMapping,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three'
import { Globe } from "../components/globe";
import {
  AerialPerspectiveEffect,
  getMoonDirectionECEF,
  getSunDirectionECEF,
  PrecomputedTexturesLoader,
  SkyLightProbe,
  SkyMaterial,
  SunDirectionalLight,
} from '@takram/three-atmosphere'
import {
  DitheringEffect,
  LensFlareEffect
} from '@takram/three-geospatial-effects'

let globe
let renderer
let camera
let scene
let skyMaterial
let skyLight
let sunLight
let aerialPerspective
let composer

const sunDirection = new Vector3()
const moonDirection = new Vector3()

// A midnight sun in summer.
const referenceDate = new Date('2000-06-01T10:00:00Z')

function init() {
  // scene
  scene = new Scene();

  // renderer
  renderer = new WebGLRenderer({
    antialias: true,
    depth: false,
    logarithmicDepthBuffer: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = NoToneMapping
  renderer.toneMappingExposure = 10
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap

  const container = document.getElementById('container')
  container.appendChild(renderer.domElement);

  // camera
  const aspect = window.innerWidth / window.innerHeight
  camera = new PerspectiveCamera(75, aspect, 10, 1e6);
  camera.position.set(4800000, 2570000, 14720000);
  camera.lookAt(0, 0, 0);

  globe = new Globe(scene, camera, renderer);
  scene.add(globe.tiles.group);

  // Create the sky
  skyMaterial = new SkyMaterial()
  const sky = new Mesh(new PlaneGeometry(2, 2), skyMaterial)
  sky.frustumCulled = false
  scene.add(sky)

  // SkyLightProbe computes sky irradiance of its position.
  skyLight = new SkyLightProbe()
  skyLight.position.copy(camera.position)
  scene.add(skyLight)

  // SunDirectionalLight computes sunlight transmittance to its target position.
  sunLight = new SunDirectionalLight({ distance: 300 })
  sunLight.target.position.copy(camera.position)
  sunLight.castShadow = true
  sunLight.shadow.camera.top = 300
  sunLight.shadow.camera.bottom = -300
  sunLight.shadow.camera.left = -300
  sunLight.shadow.camera.right = 300
  sunLight.shadow.camera.near = 0
  sunLight.shadow.camera.far = 600
  sunLight.shadow.mapSize.width = 2048
  sunLight.shadow.mapSize.height = 2048
  sunLight.shadow.normalBias = 1
  scene.add(sunLight)
  scene.add(sunLight.target)

  // Demonstrates forward lighting here. For deferred lighting, set
  // sunIrradiance and skyIrradiance to true, remove SkyLightProbe and
  // SunDirectionalLight, and provide a normal buffer to
  // AerialPerspectiveEffect.
  aerialPerspective = new AerialPerspectiveEffect(camera, {
    irradianceScale: 2 / Math.PI,
  })

  // Use floating-point render buffer, as radiance/luminance is stored here.
  composer = new EffectComposer(renderer, {
    frameBufferType: HalfFloatType,
    multisampling: 8
  })
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new EffectPass(camera, aerialPerspective))
  composer.addPass(
    new EffectPass(
      camera,
      new LensFlareEffect(),
      new ToneMappingEffect({mode: ToneMappingMode.AGX}),
      new DitheringEffect()
    )
  )

  // Load precomputed textures.
  new PrecomputedTexturesLoader()
    .setTypeFromRenderer(renderer)
    .load('/assets/atmosphere', onPrecomputedTexturesLoad)

  window.addEventListener("resize", onWindowResize);
}

function onPrecomputedTexturesLoad(textures) {
  Object.assign(skyMaterial, textures)
  sunLight.transmittanceTexture = textures.transmittanceTexture
  skyLight.irradianceTexture = textures.irradianceTexture
  Object.assign(aerialPerspective, textures)

  renderer.setAnimationLoop(render)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function render() {
  const date = referenceDate;
  getSunDirectionECEF(date, sunDirection)
  getMoonDirectionECEF(date, moonDirection)

  skyMaterial.sunDirection.copy(sunDirection)
  skyMaterial.moonDirection.copy(moonDirection)
  sunLight.sunDirection.copy(sunDirection)
  skyLight.sunDirection.copy(sunDirection)
  aerialPerspective.sunDirection.copy(sunDirection)

  globe.update();

  sunLight.update()
  skyLight.update()

  // Update effect materials with current camera settings
  if (composer) {
    composer.passes.forEach(pass => {
      if (pass.fullscreenMaterial && typeof pass.fullscreenMaterial.adoptCameraSettings === 'function') {
        pass.fullscreenMaterial.adoptCameraSettings(camera);
      } else if (pass.adoptCameraSettings && typeof pass.adoptCameraSettings === 'function') {
        // Some passes might have the method directly
        pass.adoptCameraSettings(camera);
      }
    });
  }

  composer.render()
}

window.addEventListener('load', init);
