import '../styles.css'; // Import the CSS file

import {
  EffectComposer,
  EffectPass,
  NormalPass,
  RenderPass,
  ToneMappingEffect,
  ToneMappingMode
} from 'postprocessing'
import {
  Group,
  HalfFloatType,
  LinearFilter,
  LinearMipMapLinearFilter,
  Mesh,
  MeshBasicMaterial,
  NoColorSpace,
  NoToneMapping,
  PerspectiveCamera,
  RedFormat,
  RepeatWrapping,
  Scene,
  TextureLoader,
  TorusKnotGeometry,
  Vector3,
  WebGLRenderer,
  Texture,
  DataTexture,
} from 'three'
import { OrbitControls } from 'three-stdlib'
import invariant from 'tiny-invariant'

import {
  AerialPerspectiveEffect,
  getSunDirectionECEF,
  PrecomputedTexturesLoader,
} from '@takram/three-atmosphere'
import {
  CLOUD_SHAPE_DETAIL_TEXTURE_SIZE,
  CLOUD_SHAPE_TEXTURE_SIZE,
  CloudsEffect,
} from '@takram/three-clouds'
import {
  createData3DTextureLoaderClass,
  Ellipsoid,
  Geodetic,
  parseUint8Array,
  radians,
  STBNLoader
} from '@takram/three-geospatial'
import {
  DitheringEffect,
  LensFlareEffect,
} from '@takram/three-geospatial-effects'

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let controls: OrbitControls;
let scene: Scene;
let aerialPerspective: AerialPerspectiveEffect;
let clouds: CloudsEffect;
let composer: EffectComposer;

const date = new Date('2000-06-01T10:00:00Z');
const geodetic = new Geodetic(0, radians(67), 500);
const position = geodetic.toECEF();
const up = Ellipsoid.WGS84.getSurfaceNormal(position);

function init(): void {
  const container = document.getElementById('container');
  invariant(container != null);

  const aspect = window.innerWidth / window.innerHeight;
  camera = new PerspectiveCamera(75, aspect, 10, 1e6);
  camera.position.copy(position);
  camera.up.copy(up);

  controls = new OrbitControls(camera, container);
  controls.enableDamping = true;
  controls.minDistance = 1e3;
  controls.target.copy(position);

  scene = new Scene();

  const group = new Group();
  Ellipsoid.WGS84.getEastNorthUpFrame(position).decompose(
    group.position,
    group.quaternion,
    group.scale
  );
  scene.add(group);

  const torusKnotGeometry = new TorusKnotGeometry(200, 60, 256, 64);
  torusKnotGeometry.computeVertexNormals();
  const torusKnot = new Mesh(
    torusKnotGeometry,
    new MeshBasicMaterial({ color: 'white' })
  );
  group.add(torusKnot);

  // Demonstrates deferred lighting here.
  aerialPerspective = new AerialPerspectiveEffect(camera);
  aerialPerspective.sky = true;
  aerialPerspective.sunIrradiance = true;
  aerialPerspective.skyIrradiance = true;

  // For the lighting in AerialPerspectiveEffect to work, we must provide a
  // normal buffer. Alternatively, this can be sourced from the MRT output.
  const normalPass = new NormalPass(scene, camera);
  aerialPerspective.normalBuffer = normalPass.texture;

  clouds = new CloudsEffect(camera);
  clouds.coverage = 0.4;
  clouds.localWeatherVelocity.set(0.001, 0);

  // Add event listener with proper type
  clouds.events.addEventListener('change', (event) => {
    if (event.property !== undefined) {
      onCloudsChange(event.property);
    }
  });

  // Define the direction to the sun.
  const sunDirection = new Vector3();
  getSunDirectionECEF(date, sunDirection);
  aerialPerspective.sunDirection.copy(sunDirection);
  clouds.sunDirection.copy(sunDirection);

  renderer = new WebGLRenderer({
    depth: false,
    logarithmicDepthBuffer: false
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = NoToneMapping;
  renderer.toneMappingExposure = 10;

  // Use floating-point render buffer, as radiance/luminance is stored here.
  composer = new EffectComposer(renderer, {
    frameBufferType: HalfFloatType,
    multisampling: 0
  });
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(normalPass);
  composer.addPass(new EffectPass(camera, clouds, aerialPerspective));
  composer.addPass(
    new EffectPass(
      camera,
      new LensFlareEffect(),
      new ToneMappingEffect({ mode: ToneMappingMode.AGX }),
      new DitheringEffect()
    )
  );

  // Load precomputed textures.
  const basePath = import.meta.env.BASE_URL || '/';
  new PrecomputedTexturesLoader().load(basePath + 'assets/atmosphere', onPrecomputedTexturesLoad);

  // Load textures for the clouds.
  new TextureLoader().load(basePath + 'assets/clouds/local_weather.png', onLocalWeatherLoad);
  new (createData3DTextureLoaderClass(parseUint8Array, {
    width: CLOUD_SHAPE_TEXTURE_SIZE,
    height: CLOUD_SHAPE_TEXTURE_SIZE,
    depth: CLOUD_SHAPE_TEXTURE_SIZE
  }))().load(basePath + 'assets/clouds/shape.bin', onShapeLoad);
  new (createData3DTextureLoaderClass(parseUint8Array, {
    width: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE,
    height: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE,
    depth: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE
  }))().load(basePath + 'assets/clouds/shape_detail.bin', onShapeDetailLoad);
  new TextureLoader().load(basePath + 'assets/clouds/turbulence.png', onTurbulenceLoad);
  new STBNLoader().load(basePath + 'assets/core/stbn.bin', onSTBNLoad);

  container.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize);
}

// Use a simpler approach with just the property name
function onCloudsChange(property: string): void {
  switch (property) {
    case 'atmosphereOverlay':
      aerialPerspective.overlay = clouds.atmosphereOverlay;
      break;
    case 'atmosphereShadow':
      aerialPerspective.shadow = clouds.atmosphereShadow;
      break;
    case 'atmosphereShadowLength':
      aerialPerspective.shadowLength = clouds.atmosphereShadowLength;
      break;
  }
}

function onPrecomputedTexturesLoad(textures: any): void {
  Object.assign(aerialPerspective, textures);
  Object.assign(clouds, textures);

  renderer.setAnimationLoop(render);
}

function onLocalWeatherLoad(texture: Texture): void {
  texture.minFilter = LinearMipMapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.colorSpace = NoColorSpace;
  texture.needsUpdate = true;
  clouds.localWeatherTexture = texture;
}

function onShapeLoad(texture: any): void {
  texture.format = RedFormat;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.wrapR = RepeatWrapping;
  texture.colorSpace = NoColorSpace;
  texture.needsUpdate = true;
  clouds.shapeTexture = texture;
}

function onShapeDetailLoad(texture: any): void {
  texture.format = RedFormat;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.wrapR = RepeatWrapping;
  texture.colorSpace = NoColorSpace;
  texture.needsUpdate = true;
  clouds.shapeDetailTexture = texture;
}

function onTurbulenceLoad(texture: Texture): void {
  texture.minFilter = LinearMipMapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.colorSpace = NoColorSpace;
  texture.needsUpdate = true;
  clouds.turbulenceTexture = texture;
}

function onSTBNLoad(texture: any): void {
  aerialPerspective.stbnTexture = texture;
  clouds.stbnTexture = texture;
}

function onWindowResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render(): void {
  controls.update();
  composer.render();
}

window.addEventListener('load', init);
