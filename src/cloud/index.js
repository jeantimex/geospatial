import './styles.css'; // Import the CSS file

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
  LensFlareEffect
} from '@takram/three-geospatial-effects'

let renderer
let camera
let controls
let scene
let aerialPerspective
let clouds
let composer

const date = new Date('2000-06-01T10:00:00Z')
const geodetic = new Geodetic(0, radians(67), 500)
const position = geodetic.toECEF()
const up = Ellipsoid.WGS84.getSurfaceNormal(position)

function init() {
  const container = document.getElementById('container')
  invariant(container != null)

  const aspect = window.innerWidth / window.innerHeight
  camera = new PerspectiveCamera(75, aspect, 10, 1e6)
  camera.position.copy(position)
  camera.up.copy(up)

  controls = new OrbitControls(camera, container)
  controls.enableDamping = true
  controls.minDistance = 1e3
  controls.target.copy(position)

  scene = new Scene()

  const group = new Group()
  Ellipsoid.WGS84.getEastNorthUpFrame(position).decompose(
    group.position,
    group.quaternion,
    group.scale
  )
  scene.add(group)

  const torusKnotGeometry = new TorusKnotGeometry(200, 60, 256, 64)
  torusKnotGeometry.computeVertexNormals()
  const torusKnot = new Mesh(
    torusKnotGeometry,
    new MeshBasicMaterial({ color: 'white' })
  )
  group.add(torusKnot)

  // Demonstrates deferred lighting here.
  aerialPerspective = new AerialPerspectiveEffect(camera)
  aerialPerspective.sky = true
  aerialPerspective.sunIrradiance = true
  aerialPerspective.skyIrradiance = true

  // For the lighting in AerialPerspectiveEffect to work, we must provide a
  // normal buffer. Alternatively, this can be sourced from the MRT output.
  const normalPass = new NormalPass(scene, camera)
  aerialPerspective.normalBuffer = normalPass.texture

  clouds = new CloudsEffect(camera)
  clouds.coverage = 0.4
  clouds.localWeatherVelocity.set(0.001, 0)
  clouds.events.addEventListener('change', onCloudsChange)

  // Define the direction to the sun.
  const sunDirection = new Vector3()
  getSunDirectionECEF(date, sunDirection)
  aerialPerspective.sunDirection.copy(sunDirection)
  clouds.sunDirection.copy(sunDirection)

  renderer = new WebGLRenderer({
    depth: false,
    logarithmicDepthBuffer: false
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = NoToneMapping
  renderer.toneMappingExposure = 10

  // Use floating-point render buffer, as radiance/luminance is stored here.
  composer = new EffectComposer(renderer, {
    frameBufferType: HalfFloatType,
    multisampling: 0
  })
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(normalPass)
  composer.addPass(new EffectPass(camera, clouds, aerialPerspective))
  composer.addPass(
    new EffectPass(
      camera,
      new LensFlareEffect(),
      new ToneMappingEffect({ mode: ToneMappingMode.AGX }),
      new DitheringEffect()
    )
  )

  // Load precomputed textures.
  new PrecomputedTexturesLoader().load('atmosphere', onPrecomputedTexturesLoad)

  // Load textures for the clouds.
  new TextureLoader().load('clouds/local_weather.png', onLocalWeatherLoad)
  new (createData3DTextureLoaderClass(parseUint8Array, {
    width: CLOUD_SHAPE_TEXTURE_SIZE,
    height: CLOUD_SHAPE_TEXTURE_SIZE,
    depth: CLOUD_SHAPE_TEXTURE_SIZE
  }))().load('clouds/shape.bin', onShapeLoad)
  new (createData3DTextureLoaderClass(parseUint8Array, {
    width: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE,
    height: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE,
    depth: CLOUD_SHAPE_DETAIL_TEXTURE_SIZE
  }))().load('clouds/shape_detail.bin', onShapeDetailLoad)
  new TextureLoader().load('clouds/turbulence.png', onTurbulenceLoad)
  new STBNLoader().load('core/stbn.bin', onSTBNLoad)

  container.appendChild(renderer.domElement)
  window.addEventListener('resize', onWindowResize)
}

function onCloudsChange(event) {
  switch (event.property) {
    case 'atmosphereOverlay':
      aerialPerspective.overlay = clouds.atmosphereOverlay
      break
    case 'atmosphereShadow':
      aerialPerspective.shadow = clouds.atmosphereShadow
      break
    case 'atmosphereShadowLength':
      aerialPerspective.shadowLength = clouds.atmosphereShadowLength
      break
  }
}

function onPrecomputedTexturesLoad(textures) {
  Object.assign(aerialPerspective, textures)
  Object.assign(clouds, textures)

  renderer.setAnimationLoop(render)
}

function onLocalWeatherLoad(texture) {
  texture.minFilter = LinearMipMapLinearFilter
  texture.magFilter = LinearFilter
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.colorSpace = NoColorSpace
  texture.needsUpdate = true
  clouds.localWeatherTexture = texture
}

function onShapeLoad(texture) {
  texture.format = RedFormat
  texture.minFilter = LinearFilter
  texture.magFilter = LinearFilter
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.wrapR = RepeatWrapping
  texture.colorSpace = NoColorSpace
  texture.needsUpdate = true
  clouds.shapeTexture = texture
}

function onShapeDetailLoad(texture) {
  texture.format = RedFormat
  texture.minFilter = LinearFilter
  texture.magFilter = LinearFilter
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.wrapR = RepeatWrapping
  texture.colorSpace = NoColorSpace
  texture.needsUpdate = true
  clouds.shapeDetailTexture = texture
}

function onTurbulenceLoad(texture) {
  texture.minFilter = LinearMipMapLinearFilter
  texture.magFilter = LinearFilter
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.colorSpace = NoColorSpace
  texture.needsUpdate = true
  clouds.turbulenceTexture = texture
}

function onSTBNLoad(texture) {
  aerialPerspective.stbnTexture = texture
  clouds.stbnTexture = texture
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function render() {
  controls.update()
  composer.render()
}
