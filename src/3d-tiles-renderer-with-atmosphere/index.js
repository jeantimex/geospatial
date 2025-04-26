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
  NoToneMapping,
  PerspectiveCamera,
  Scene,
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
  Ellipsoid,
  Geodetic,
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

  // Demonstrates deferred lighting here.
  aerialPerspective = new AerialPerspectiveEffect(camera)
  aerialPerspective.sky = true
  aerialPerspective.sunIrradiance = true
  aerialPerspective.skyIrradiance = true

  // For the lighting in AerialPerspectiveEffect to work, we must provide a
  // normal buffer. Alternatively, this can be sourced from the MRT output.
  const normalPass = new NormalPass(scene, camera)
  aerialPerspective.normalBuffer = normalPass.texture

  // Define the direction to the sun.
  const sunDirection = new Vector3()
  getSunDirectionECEF(date, sunDirection)
  aerialPerspective.sunDirection.copy(sunDirection)

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
  composer.addPass(new EffectPass(camera, aerialPerspective))
  composer.addPass(
    new EffectPass(
      camera,
      new LensFlareEffect(),
      new ToneMappingEffect({ mode: ToneMappingMode.AGX }),
      new DitheringEffect()
    )
  )

  // Load precomputed textures.
  new PrecomputedTexturesLoader().load('/assets/atmosphere', onPrecomputedTexturesLoad)

  // Load textures for the atmosphere.
  new STBNLoader().load('/assets/core/stbn.bin', onSTBNLoad)

  container.appendChild(renderer.domElement)
  window.addEventListener('resize', onWindowResize)
}

function onPrecomputedTexturesLoad(textures) {
  Object.assign(aerialPerspective, textures)

  renderer.setAnimationLoop(render)
}

function onSTBNLoad(texture) {
  aerialPerspective.stbnTexture = texture
  texture.needsUpdate = true
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

window.addEventListener('load', init);