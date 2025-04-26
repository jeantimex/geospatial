import {
  GlobeControls,
  TilesRenderer,
} from "3d-tiles-renderer";
import {
  TilesFadePlugin,
  UpdateOnChangePlugin,
  TileCompressionPlugin,
  UnloadTilesPlugin,
  GLTFExtensionsPlugin,
  GoogleCloudAuthPlugin,
} from "3d-tiles-renderer/plugins";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export class Globe {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.tiles = new TilesRenderer();
    this.tiles.registerPlugin(
      new GoogleCloudAuthPlugin({
        apiToken: import.meta.env.VITE_GOOGLE_MAPS_JS_API_KEY,
        autoRefreshToken: true,
      })
    );
    this.tiles.registerPlugin(new TileCompressionPlugin());
    this.tiles.registerPlugin(new UpdateOnChangePlugin());
    this.tiles.registerPlugin(new UnloadTilesPlugin());
    this.tiles.registerPlugin(new TilesFadePlugin());
    this.tiles.registerPlugin(
      new GLTFExtensionsPlugin({
        // Using local files from public directory for DRACO decoder
        dracoLoader: new DRACOLoader().setDecoderPath("/assets/draco/"),
      })
    );
  
    this.tiles.group.rotation.x = -Math.PI / 2;
  
    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.controls = new GlobeControls(
      this.scene,
      this.camera,
      this.renderer.domElement,
      this.tiles,
    );
    this.controls.enableDamping = true;
  }

  update() {
    this.controls.enabled = true;
    this.controls.update();

    // update options
    this.camera.updateMatrixWorld();
    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.tiles.update();
  }
}
