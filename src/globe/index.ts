import { TilesRenderer, GlobeControls } from "3d-tiles-renderer";
import {
  TileCompressionPlugin,
  UpdateOnChangePlugin,
  UnloadTilesPlugin,
  TilesFadePlugin,
  GLTFExtensionsPlugin,
  GoogleCloudAuthPlugin,
} from "3d-tiles-renderer/plugins";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { TileCreasedNormalsPlugin } from "../plugins/TileCreasedNormalsPlugin";

export class Globe {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  tiles: TilesRenderer;
  controls: GlobeControls;
  private _initialInteractionPerformed: boolean = false;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    disableControls: boolean = false
  ) {
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
    this.tiles.registerPlugin(
      new GLTFExtensionsPlugin({
        dracoLoader: new DRACOLoader().setDecoderPath(
          "https://www.gstatic.com/draco/v1/decoders/"
        ),
      })
    );
    this.tiles.registerPlugin(new TileCompressionPlugin());
    this.tiles.registerPlugin(new UpdateOnChangePlugin());
    this.tiles.registerPlugin(new UnloadTilesPlugin());
    this.tiles.registerPlugin(new TilesFadePlugin());
    this.tiles.registerPlugin(
      new TileCreasedNormalsPlugin({
        creaseAngle: 45,
      })
    );

    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.controls = new GlobeControls(
      this.scene,
      this.camera,
      this.renderer.domElement,
      this.tiles
    );
    this.controls.enableDamping = true;
    this.controls.enabled = !disableControls;

    if (disableControls) {
      const activateControlsAndRedispatch = (
        event: PointerEvent | WheelEvent
      ) => {
        // If controls have already been activated by a different event type
        // (e.g., pointerdown activated, and now the wheel listener fires),
        // this flag will be true. In this case, we do nothing here, as the
        // GlobeControls are already enabled and should pick up the original event.
        if (this._initialInteractionPerformed) {
          return;
        }

        this.controls.enabled = true;
        this._initialInteractionPerformed = true; // Set flag after enabling controls

        let newEventToRedispatch;
        if (event instanceof PointerEvent) {
          newEventToRedispatch = new PointerEvent(event.type, event);
        } else if (event instanceof WheelEvent) {
          newEventToRedispatch = new WheelEvent(event.type, event);
        } else {
          // Should not happen with correctly typed event listeners
          console.warn(
            "Globe: Unknown event type for control activation:",
            event
          );
          return;
        }

        this.renderer.domElement.dispatchEvent(newEventToRedispatch);
        console.log(
          `Globe controls enabled; ${event.type} event re-dispatched.`
        );
      };

      // Add one-time listeners for pointerdown and wheel events
      this.renderer.domElement.addEventListener(
        "pointerdown",
        activateControlsAndRedispatch as EventListener,
        { once: true }
      );
      this.renderer.domElement.addEventListener(
        "wheel",
        activateControlsAndRedispatch as EventListener,
        { once: true }
      );
    }
  }

  update(): void {
    this.controls.update();

    this.camera.updateMatrixWorld();
    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.tiles.update();

    this.updateAttributions();
  }

  updateAttributions(): void {
    const attributions = this.tiles.getAttributions()[0]?.value || "";
    const creditsElement = document.getElementById("credits");
    if (creditsElement) {
      creditsElement.innerText = attributions;
    } else {
      console.warn(
        'Credits element not found in the DOM. Make sure an element with id="credits" exists.'
      );
    }
  }
}
