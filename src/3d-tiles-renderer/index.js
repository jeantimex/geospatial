import './styles.css'; // Import the CSS file

import {
  GlobeControls,
  CameraTransitionManager,
  TilesRenderer,
} from "3d-tiles-renderer";
import {
  TilesFadePlugin,
  UpdateOnChangePlugin,
  TileCompressionPlugin,
  UnloadTilesPlugin,
  GLTFExtensionsPlugin,
  BatchedTilesPlugin,
  GoogleCloudAuthPlugin,
} from "3d-tiles-renderer/plugins";
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  OrthographicCamera,
} from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

let controls, scene, renderer, tiles, transition;

const params = {
  orthographic: false,

  enableCacheDisplay: false,
  errorTarget: 40,
};

init();
animate();

function reinstantiateTiles() {
  if (tiles) {
    scene.remove(tiles.group);
    tiles.dispose();
    tiles = null;
  }

  tiles = new TilesRenderer();
  tiles.registerPlugin(
    new GoogleCloudAuthPlugin({
      apiToken: import.meta.env.VITE_GOOGLE_MAPS_JS_API_KEY,
      autoRefreshToken: true,
    })
  );
  tiles.registerPlugin(new TileCompressionPlugin());
  tiles.registerPlugin(new UpdateOnChangePlugin());
  tiles.registerPlugin(new UnloadTilesPlugin());
  tiles.registerPlugin(new TilesFadePlugin());
  tiles.registerPlugin(
    new GLTFExtensionsPlugin({
      // Using local files from public directory for DRACO decoder
      dracoLoader: new DRACOLoader().setDecoderPath("/assets/draco/"),
    })
  );

  if (params.useBatchedMesh) {
    tiles.registerPlugin(
      new BatchedTilesPlugin({
        renderer,
        discardOriginalContent: false,
        instanceCount: 250,
      })
    );
  }

  tiles.group.rotation.x = -Math.PI / 2;
  scene.add(tiles.group);

  tiles.setResolutionFromRenderer(transition.camera, renderer);
  tiles.setCamera(transition.camera);

  controls.setTilesRenderer(tiles);
}

function init() {
  // renderer
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x151c1f);
  document.body.appendChild(renderer.domElement);

  // scene
  scene = new Scene();

  // camera and transition set up
  transition = new CameraTransitionManager(
    new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      160000000
    ),
    new OrthographicCamera(-1, 1, 1, -1, 1, 160000000)
  );
  transition.perspectiveCamera.position.set(4800000, 2570000, 14720000);
  transition.perspectiveCamera.lookAt(0, 0, 0);
  transition.autoSync = false;

  transition.addEventListener("camera-change", ({ camera, prevCamera }) => {
    tiles.deleteCamera(prevCamera);
    tiles.setCamera(camera);
    controls.setCamera(camera);
  });

  // disable adjusting the orthographic camera position for zoom since globe controls will do this
  transition.orthographicPositionalZoom = false;

  // controls
  controls = new GlobeControls(
    scene,
    transition.camera,
    renderer.domElement,
    null
  );
  controls.enableDamping = true;

  // initialize tiles
  reinstantiateTiles();

  onWindowResize();
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  const { perspectiveCamera, orthographicCamera } = transition;
  const aspect = window.innerWidth / window.innerHeight;

  perspectiveCamera.aspect = aspect;
  perspectiveCamera.updateProjectionMatrix();

  orthographicCamera.left = -orthographicCamera.top * aspect;
  orthographicCamera.right = -orthographicCamera.left;
  orthographicCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

function animate() {
  requestAnimationFrame(animate);

  if (!tiles) return;

  controls.enabled = !transition.animating;
  controls.update();
  transition.update();

  // update options
  const camera = transition.camera;
  tiles.setResolutionFromRenderer(camera, renderer);
  tiles.setCamera(camera);

  // update tiles
  camera.updateMatrixWorld();
  tiles.errorTarget = params.errorTarget;
  tiles.update();

  renderer.render(scene, camera);
}
