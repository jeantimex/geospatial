import {
  DoubleSide,
  VideoTexture,
  LinearFilter,
  RGBAFormat,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  MathUtils,
  Scene,
  PerspectiveCamera,
} from "three";
import { TilesRenderer, WGS84_ELLIPSOID } from "3d-tiles-renderer";

export class LasVegasSphere {
  locationSphere;
  videoTexture;
  videoElement;
  scene: Scene;
  tiles: TilesRenderer;
  videoPath: string;
  latitude: number;
  longitude: number;
  altitude: number;
  radius: number;
  sphere: Mesh;
  camera: PerspectiveCamera;

  constructor(scene: Scene, camera: PerspectiveCamera, tiles: TilesRenderer) {
    this.scene = scene;
    this.tiles = tiles;
    this.camera = camera;
    this.latitude = 36.12125;
    this.longitude = -115.16205;
    this.altitude = 640;
    this.radius = 82.5;

    const basePath = import.meta.env.BASE_URL || "/";
    this.videoPath = basePath + "assets/video/emojidemo.mp4";

    this.sphere = this.add();
  }

  // Add a function to create a sphere at geographic coordinates
  private add() {
    // Create sphere geometry with more segments for better texture mapping
    const geometry = new SphereGeometry(this.radius, 64, 64);

    // Create a texture from the video
    const texture = this.createVideoTexture();

    // Create material with video texture
    const material = new MeshBasicMaterial({
      map: texture,
      side: DoubleSide,
    });

    // Create the sphere mesh
    const sphere = new Mesh(geometry, material);

    // Position the sphere at the geographic coordinates
    WGS84_ELLIPSOID.getCartographicToPosition(
      this.latitude * MathUtils.DEG2RAD,
      this.longitude * MathUtils.DEG2RAD,
      this.altitude,
      sphere.position
    );

    // Apply the tiles matrix world transformation
    sphere.position.applyMatrix4(this.tiles.group.matrixWorld);

    // Align the sphere with the Earth's surface
    sphere.lookAt(0, 0, 0);

    // Rotate the sphere by 270 degrees (3π/2) around its local X axis to make it upside down
    // This is equivalent to the original 90 degrees + 180 degrees to flip it
    sphere.rotateX((Math.PI * 3) / 2);

    // Add a 15-degree tilt around the Y axis to better see the face
    sphere.rotateZ((Math.PI * 20) / 180);

    // Add the sphere to the scene
    this.scene.add(sphere);

    return sphere;
  }

  // Create a video texture for the sphere
  createVideoTexture(): VideoTexture {
    // Create video element
    this.videoElement = document.createElement("video");
    this.videoElement.src = this.videoPath;
    this.videoElement.loop = true;
    this.videoElement.muted = true; // Must be muted for autoplay to work in most browsers
    this.videoElement.playsInline = true;
    this.videoElement.crossOrigin = "anonymous";
    this.videoElement.autoplay = true;

    // Force video to load
    this.videoElement.load();

    // Create video texture
    this.videoTexture = new VideoTexture(this.videoElement);
    this.videoTexture.minFilter = LinearFilter;
    this.videoTexture.magFilter = LinearFilter;
    this.videoTexture.format = RGBAFormat;

    // Start playing the video with more aggressive approach
    const playVideo = () => {
      const playPromise = this.videoElement.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playback started successfully");
          })
          .catch((error) => {
            console.error("Error playing video:", error);
            // Try again after user interaction
            document.addEventListener(
              "click",
              () => {
                this.videoElement.play();
              },
              { once: true }
            );
          });
      }
    };

    // Play video when it's loaded
    this.videoElement.addEventListener("loadeddata", playVideo);

    // Also try when metadata is loaded
    this.videoElement.addEventListener("loadedmetadata", playVideo);

    // Try to play immediately as well
    playVideo();

    return this.videoTexture;
  }

  update(): void {
    // Make the sphere always visible
    this.sphere.visible = true;
    
    // Scale the sphere based on distance to maintain visual size
    const distance = this.camera.position.distanceTo(this.sphere.position);
    const distanceScale = Math.max(1.0, distance / 100000);
    this.sphere.scale.set(distanceScale, distanceScale, distanceScale);
    
    // Update the video texture if it exists
    if (this.videoTexture) {
      this.videoTexture.needsUpdate = true;
      
      // If video is paused, try to play it
      if (this.videoElement && this.videoElement.paused) {
        this.videoElement.play().catch(e => {
          // Silent catch - we'll try again on next frame
        });
      }
    }
  }
}
