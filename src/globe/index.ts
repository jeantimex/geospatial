import { GlobeControls, TilesRenderer } from "3d-tiles-renderer";
import {
  TilesFadePlugin,
  UpdateOnChangePlugin,
  TileCompressionPlugin,
  UnloadTilesPlugin,
  GLTFExtensionsPlugin,
  GoogleCloudAuthPlugin,
} from "3d-tiles-renderer/plugins";
import { DRACOLoader } from "three-stdlib";
import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, MathUtils } from "three";
import { TileCreasedNormalsPlugin } from "../plugins/TileCreasedNormalsPlugin";

// Define a radius for the globe. This might need to be adjusted to match
// the scale of your 3D Tiles dataset or how TilesRenderer sets up its world.
// Earth's mean radius is approx 6,371,000 meters.
// If your tileset is normalized, this might be 1.0 or another value.
const GLOBE_RADIUS = 1.0; // Assuming a normalized globe radius for the tileset

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
      const activateControlsAndRedispatch = (event: PointerEvent | WheelEvent) => {
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
          console.warn('Globe: Unknown event type for control activation:', event);
          return;
        }
        
        this.renderer.domElement.dispatchEvent(newEventToRedispatch);
        console.log(`Globe controls enabled; ${event.type} event re-dispatched.`);
      };

      // Add one-time listeners for pointerdown and wheel events
      this.renderer.domElement.addEventListener('pointerdown', activateControlsAndRedispatch as EventListener, { once: true });
      this.renderer.domElement.addEventListener('wheel', activateControlsAndRedispatch as EventListener, { once: true });
    }
  }

  /**
   * Projects geographic coordinates (longitude, latitude, altitude) to 3D world coordinates.
   * @param longitude Longitude in degrees.
   * @param latitude Latitude in degrees.
   * @param altitude Altitude above the globe's surface in meters. Defaults to 0.
   * @returns THREE.Vector3 The 3D world coordinate.
   */
  public project(longitude: number, latitude: number, altitude: number = 0): Vector3 {
    const lonRad = MathUtils.degToRad(longitude);
    const latRad = MathUtils.degToRad(latitude);

    // Spherical to Cartesian conversion
    // Y is up in Three.js default coordinate system for a sphere centered at origin
    const x = (GLOBE_RADIUS + altitude) * Math.cos(latRad) * Math.sin(lonRad);
    const y = (GLOBE_RADIUS + altitude) * Math.sin(latRad);
    const z = (GLOBE_RADIUS + altitude) * Math.cos(latRad) * Math.cos(lonRad);

    // The 3D Tiles renderer might use a different coordinate system or orientation.
    // If the tiles.group is translated or rotated, we might need to apply its world matrix.
    // For now, this assumes a globe centered at the origin with standard Three.js orientation.
    const worldPosition = new Vector3(x, y, z);

    // If your tiles.group (the root of the 3D tiles) has transformations (position, rotation, scale),
    // you'll need to apply them to this worldPosition.
    if (this.tiles && this.tiles.group) { // Check if tiles and group exist
      this.tiles.group.updateWorldMatrix(true, false); // Ensure matrixWorld is up-to-date
      worldPosition.applyMatrix4(this.tiles.group.matrixWorld);
    }

    return worldPosition;
  }

  update(): void {
    this.controls.update();

    this.camera.updateMatrixWorld();
    this.tiles.setResolutionFromRenderer(this.camera, this.renderer);
    this.tiles.setCamera(this.camera);

    this.tiles.update();
  }
}
