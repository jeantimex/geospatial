import "../styles.css"; // Import the CSS file

import {
  EffectMaterial,
  EffectComposer,
  EffectPass,
  NormalPass,
  RenderPass,
  ToneMappingEffect,
  ToneMappingMode,
  SMAAEffect,
  LUT3DEffect,
} from "postprocessing";
import {
  HalfFloatType,
  NoToneMapping,
  Mesh,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  Vector3,
  Matrix4,
  WebGLRenderer,
  TextureLoader,
  Texture,
} from "three";
import { Globe } from "../globe";
import {
  AerialPerspectiveEffect,
  PrecomputedTexturesLoader,
  SkyMaterial,
} from "@takram/three-atmosphere";
import {
  DitheringEffect,
  LensFlareEffect,
  createHaldLookupTexture,
} from "@takram/three-geospatial-effects";
import {
  getMoonDirectionECI,
  getSunDirectionECI,
  getECIToECEFRotationMatrix,
} from "../utils/celestialDirections";
import { Geodetic, PointOfView, radians } from "@takram/three-geospatial";

let globe: Globe;
let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let scene: Scene;
let skyMaterial: SkyMaterial;
let aerialPerspective: AerialPerspectiveEffect;
let composer: EffectComposer;
let lutTexture: Texture;
let lutEffect: LUT3DEffect;

const sunDirection = new Vector3();
const moonDirection = new Vector3();
const rotationMatrix = new Matrix4();

// Tokyo time 15:00PM
const referenceDate = new Date("2025-01-01T15:00:00+09:00");

function init(): void {
  // scene
  scene = new Scene();

  // renderer
  renderer = new WebGLRenderer({
    powerPreference: "high-performance",
    antialias: true,
    stencil: false,
    depth: false,
    logarithmicDepthBuffer: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = NoToneMapping;
  renderer.toneMappingExposure = 10;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const container = document.getElementById("container");
  if (container) {
    container.appendChild(renderer.domElement);
  }

  // camera
  const aspect = window.innerWidth / window.innerHeight;
  camera = new PerspectiveCamera(75, aspect, 10, 1e6);

  // --- New setup using geospatial coordinates ---
  const longitude = 139.7671; // degrees (Tokyo)
  const latitude = 35.6812; // degrees
  const heading = 180; // degrees
  const pitch = -10; // degrees
  const distance = 4500; // meters

  // Calculate the center point on the globe in ECEF coordinates
  const centerECEF = new Geodetic(
    radians(longitude),
    radians(latitude)
  ).toECEF(); // Converts lon/lat to a Vector3 position

  // Calculate camera position and orientation based on the point of view
  new PointOfView(distance, radians(heading), radians(pitch)).decompose(
    centerECEF, // The point to look towards (target)
    camera.position, // Vector3 to store the calculated camera position
    camera.quaternion // Quaternion to store the calculated camera orientation
  );

  // Ensure the camera's up vector is set correctly (usually Y-up for camera space)
  // The .decompose method should handle this via the quaternion,
  // but explicitly setting it can prevent issues if the camera was previously manipulated.
  camera.up.set(0, 1, 0);

  // Update projection matrix if aspect ratio changed
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  // Create the sky
  skyMaterial = new SkyMaterial();
  const sky = new Mesh(new PlaneGeometry(2, 2), skyMaterial);
  sky.frustumCulled = false;
  scene.add(sky);

  globe = new Globe(scene, camera, renderer);
  scene.add(globe.tiles.group);

  // Demonstrates forward lighting here. For deferred lighting, set
  // sunIrradiance and skyIrradiance to true, remove SkyLightProbe and
  // SunDirectionalLight, and provide a normal buffer to
  // AerialPerspectiveEffect.
  aerialPerspective = new AerialPerspectiveEffect(camera, {
    correctGeometricError: true,
    correctAltitude: true,
    inscatter: true,
    photometric: true,
    skyIrradiance: true,
    sunIrradiance: true,
    transmittance: true,
    irradianceScale: 2 / Math.PI,
    sky: true,
    sun: true,
    moon: true,
  });

  // Load precomputed textures.
  const basePath = import.meta.env.BASE_URL || "/";
  new PrecomputedTexturesLoader()
    .setTypeFromRenderer(renderer)
    .load(basePath + "assets/atmosphere", onPrecomputedTexturesLoad);

  // --------------------------------
  //  Color Grading is not working
  // --------------------------------
  // Load the LUT texture for color grading
  const textureLoader = new TextureLoader();
  // You can change the LUT file path to any of your available LUTs
  const lutPath = basePath + "assets/clut/Fuji/Fuji 160C 1 -.png";
  textureLoader.load(lutPath, (texture) => {
    lutTexture = createHaldLookupTexture(texture);
    lutEffect = new LUT3DEffect(lutTexture);
    if (composer) {
      // composer.addPass(new EffectPass(camera, lutEffect));
    }
  });

  // Use floating-point render buffer, as radiance/luminance is stored here.
  composer = new EffectComposer(renderer, {
    frameBufferType: HalfFloatType,
    multisampling: 8,
  });
  const normalPass = new NormalPass(scene, camera);
  normalPass.enabled = false;
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(normalPass);
  composer.addPass(new EffectPass(camera, aerialPerspective));
  composer.addPass(new EffectPass(camera, new LensFlareEffect()));
  composer.addPass(
    new EffectPass(camera, new ToneMappingEffect({ mode: ToneMappingMode.AGX }))
  );
  composer.addPass(new EffectPass(camera, new SMAAEffect()));
  composer.addPass(new EffectPass(camera, new DitheringEffect()));

  window.addEventListener("resize", onWindowResize);
}

function onPrecomputedTexturesLoad(textures: any): void {
  Object.assign(skyMaterial, textures);
  Object.assign(aerialPerspective, textures);

  renderer.setAnimationLoop(render);
}

function onWindowResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render(): void {
  const date = referenceDate;
  getECIToECEFRotationMatrix(date, rotationMatrix);
  getSunDirectionECI(date, sunDirection).applyMatrix4(rotationMatrix);
  getMoonDirectionECI(date, moonDirection).applyMatrix4(rotationMatrix);

  skyMaterial.sunDirection.copy(sunDirection);
  skyMaterial.moonDirection.copy(moonDirection);

  aerialPerspective.sunDirection.copy(sunDirection);
  aerialPerspective.moonDirection.copy(moonDirection);

  globe.update();

  // Update effect materials with current camera settings
  composer?.render();
}

window.addEventListener("load", init);
