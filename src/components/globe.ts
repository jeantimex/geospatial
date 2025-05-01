import { GlobeControls, TilesRenderer } from "3d-tiles-renderer";
import {
  TilesFadePlugin,
  UpdateOnChangePlugin,
  TileCompressionPlugin,
  UnloadTilesPlugin,
  GLTFExtensionsPlugin,
  GoogleCloudAuthPlugin,
} from "3d-tiles-renderer/plugins";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
// import { TileNormalsPlugin } from "./TileNormalsPlugin";

export class Globe {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  tiles: TilesRenderer;
  controls: GlobeControls;

  constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
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
        dracoLoader: new DRACOLoader().setDecoderPath(
          "https://www.gstatic.com/draco/v1/decoders/"
        ),
      })
    );
    // this.tiles.registerPlugin(
    //   new TileNormalsPlugin({
    //     creaseAngle: 30, // 30 degrees for creasing
    //     smoothNormals: true
    //   })
    // );

    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.controls = new GlobeControls(
      this.scene,
      this.camera,
      this.renderer.domElement,
      this.tiles
    );
    this.controls.enableDamping = true;
  }

  update(): void {
    this.controls.enabled = true;
    this.controls.update();

    // update options
    this.camera.updateMatrixWorld();
    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.tiles.update();
  }
}
