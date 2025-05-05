import {
  WGS84_ELLIPSOID,
  CAMERA_FRAME,
  GeoUtils,
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
  MathUtils,
  OrthographicCamera,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  Color,
  DoubleSide,
  VideoTexture,
  LinearFilter,
  RGBAFormat
} from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

let controls, scene, renderer, tiles, transition;
let statsContainer, stats;
let locationSphere; // Reference to the location sphere
let videoTexture;
let videoElement;

// Create a video texture for the sphere
function createVideoTexture(videoPath) {
  // Create video element
  videoElement = document.createElement('video');
  videoElement.src = videoPath;
  videoElement.loop = true;
  videoElement.muted = true; // Must be muted for autoplay to work in most browsers
  videoElement.playsInline = true;
  videoElement.crossOrigin = 'anonymous';
  videoElement.autoplay = true;
  
  // Force video to load
  videoElement.load();
  
  // Create video texture
  videoTexture = new VideoTexture(videoElement);
  videoTexture.minFilter = LinearFilter;
  videoTexture.magFilter = LinearFilter;
  videoTexture.format = RGBAFormat;
  
  // Start playing the video with more aggressive approach
  const playVideo = () => {
    const playPromise = videoElement.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log("Video playback started successfully");
      }).catch(error => {
        console.error("Error playing video:", error);
        // Try again after user interaction
        document.addEventListener('click', () => {
          videoElement.play();
        }, { once: true });
      });
    }
  };
  
  // Play video when it's loaded
  videoElement.addEventListener('loadeddata', playVideo);
  
  // Also try when metadata is loaded
  videoElement.addEventListener('loadedmetadata', playVideo);
  
  // Try to play immediately as well
  playVideo();
  
  return videoTexture;
}

// Add a function to create a sphere at geographic coordinates
function addSphereAtLocation(lat, lon, altitude, radius, videoPath) {
  // Skip if tiles aren't initialized
  if (!tiles) return null;
  
  // Create sphere geometry with more segments for better texture mapping
  const geometry = new SphereGeometry(radius, 64, 64);
  
  // Create a texture from the video
  const texture = createVideoTexture(videoPath);
  
  // Create material with video texture
  const material = new MeshBasicMaterial({
    map: texture,
    side: DoubleSide
  });
  
  // Create the sphere mesh
  const sphere = new Mesh(geometry, material);
  
  // Position the sphere at the geographic coordinates
  WGS84_ELLIPSOID.getCartographicToPosition(
    lat * MathUtils.DEG2RAD,
    lon * MathUtils.DEG2RAD,
    altitude,
    sphere.position
  );
  
  // Apply the tiles matrix world transformation
  sphere.position.applyMatrix4(tiles.group.matrixWorld);
  
  // Align the sphere with the Earth's surface
  sphere.lookAt(0, 0, 0);
  
  // Rotate the sphere by 270 degrees (3π/2) around its local X axis to make it upside down
  // This is equivalent to the original 90 degrees + 180 degrees to flip it
  sphere.rotateX(Math.PI * 3/2);
  
  // Add a 15-degree tilt around the Y axis to better see the face
  sphere.rotateZ(Math.PI * 20/180);
  
  // Add the sphere to the scene
  scene.add(sphere);
  
  return sphere;
}

const params = {
  orthographic: false,

  enableCacheDisplay: false,
  enableRendererStats: false,
  useBatchedMesh: Boolean(
    new URLSearchParams(window.location.hash.replace(/^#/, "")).get("batched")
  ),
  errorTarget: 40,

  latitude: 36.1275,
  longitude: -115.1701,
  altitude: 952,
  autoUpdate: true,
  skipNextHashUpdate: false,
  goToLocation: () => {
    const { latitude, longitude, altitude } = params;
    
    // Create a new URL with the updated parameters
    const urlParams = new URLSearchParams();
    urlParams.set("lat", latitude.toFixed(4));
    urlParams.set("lon", longitude.toFixed(4));
    urlParams.set("height", altitude.toFixed(2));
    
    // Preserve other parameters
    if (params.useBatchedMesh) {
      urlParams.set("batched", 1);
    }
    
    // Update the hash without triggering the hashchange event
    window.history.replaceState(undefined, undefined, `#${urlParams}`);
    
    // Manually call initFromHash to update the camera position
    initFromHash();
  },

  reload: reinstantiateTiles,
};

init();
animate();

// Set initial location in URL if not already set
(function setInitialLocation() {
  const hash = window.location.hash.replace(/^#/, "");
  const urlParams = new URLSearchParams(hash);
  
  // Only set default location if lat and lon are not already in the URL
  if (!urlParams.has("lat") && !urlParams.has("lon")) {
    // Format numbers to remove trailing zeros
    const formatNumber = (num) => {
      // Use parseFloat to convert the number to a string without trailing zeros
      return Number.parseFloat(num).toString();
    };
    
    // Use the default values from params
    urlParams.set("lat", formatNumber(params.latitude));
    urlParams.set("lon", formatNumber(params.longitude));
    urlParams.set("height", formatNumber(params.altitude));
    
    // Add azimuth, elevation and roll
    urlParams.set("az", "131.25");
    urlParams.set("el", "-32.91");
    urlParams.set("roll", "0");
    
    // Preserve other parameters
    if (params.useBatchedMesh) {
      urlParams.set("batched", 1);
    }
    
    // Update the URL hash
    window.history.replaceState(undefined, undefined, `#${urlParams}`);
    
    // Call initFromHash to position the camera
    initFromHash();
  }
})();

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
      dracoLoader: new DRACOLoader().setDecoderPath(
        window.location.pathname.includes('/google-earth/') ? 
        "/google-earth/draco/" : 
        "/draco/"
      ),
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
  window.addEventListener("hashchange", initFromHash);

  // GUI
  const gui = new GUI();
  gui.width = 300;

  gui.add(params, "orthographic").onChange((v) => {
    controls.getPivotPoint(transition.fixedPoint);

    // don't update the cameras if they are already being animated
    if (!transition.animating) {
      // sync the camera positions and then adjust the camera views
      transition.syncCameras();
      controls.adjustCamera(transition.perspectiveCamera);
      controls.adjustCamera(transition.orthographicCamera);
    }

    transition.toggle();
  });

  const locationFolder = gui.addFolder('Location Controls');
  locationFolder.add(params, 'latitude', -90, 90).name('Latitude').step(0.0001)
    .onChange(() => {
      // Update view when latitude changes
      if (params.autoUpdate) {
        params.goToLocation();
      }
    });
  locationFolder.add(params, 'longitude', -180, 180).name('Longitude').step(0.0001)
    .onChange(() => {
      // Update view when longitude changes
      if (params.autoUpdate) {
        params.goToLocation();
      }
    });
  locationFolder.add(params, 'altitude', 100, 10000000).name('Altitude (m)').step(100)
    .onChange(() => {
      // Update view when altitude changes
      if (params.autoUpdate) {
        params.goToLocation();
      }
    });
  locationFolder.add(params, 'goToLocation').name('Go to Location');
  locationFolder.add(params, 'autoUpdate').name('Auto-Update View');

  const mapsOptions = gui.addFolder("Google Photorealistic Tiles");
  mapsOptions.add(params, "useBatchedMesh").listen();
  mapsOptions.add(params, "reload");

  const exampleOptions = gui.addFolder("Example Options");
  exampleOptions.add(params, "enableCacheDisplay");
  exampleOptions.add(params, "enableRendererStats");
  exampleOptions.add(params, "errorTarget", 5, 100, 1).onChange(() => {
    tiles.getPluginByName("UPDATE_ON_CHANGE_PLUGIN").needsUpdate = true;
  });

  statsContainer = document.createElement("div");
  document.getElementById("info").appendChild(statsContainer);

  // Stats
  stats = new Stats();
  stats.showPanel(0);
  document.body.appendChild(stats.dom);

  // run hash functions
  initFromHash();
  setInterval(updateHash, 100);

  // Add a sphere with emoji video at Las Vegas coordinates
  locationSphere = addSphereAtLocation(
    36.12125, 
    -115.16205, 
    640, 
    82.5, 
    window.location.pathname.includes('/google-earth/') ? 
      '/google-earth/assets/emojidemo.mp4' : 
      '/assets/emojidemo.mp4'
  );
  
  // Add a click handler to the document to help with video autoplay
  document.addEventListener('click', () => {
    if (videoElement && videoElement.paused) {
      videoElement.play().catch(e => console.error("Error playing video on click:", e));
    }
  });
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

function updateHash() {
  if (!tiles) {
    return;
  }

  const camera = transition.camera;
  const cartographicResult = {};
  const orientationResult = {};
  const tilesMatInv = tiles.group.matrixWorld.clone().invert();
  const localCameraPos = camera.position.clone().applyMatrix4(tilesMatInv);
  const localCameraMat = camera.matrixWorld.clone().premultiply(tilesMatInv);

  // get the data
  WGS84_ELLIPSOID.getPositionToCartographic(localCameraPos, cartographicResult);
  WGS84_ELLIPSOID.getAzElRollFromRotationMatrix(
    cartographicResult.lat,
    cartographicResult.lon,
    localCameraMat,
    orientationResult,
    CAMERA_FRAME
  );

  // convert to DEG
  orientationResult.azimuth *= MathUtils.RAD2DEG;
  orientationResult.elevation *= MathUtils.RAD2DEG;
  orientationResult.roll *= MathUtils.RAD2DEG;
  cartographicResult.lat *= MathUtils.RAD2DEG;
  cartographicResult.lon *= MathUtils.RAD2DEG;

  // update hash
  const urlParams = new URLSearchParams();
  urlParams.set("lat", cartographicResult.lat.toFixed(4));
  urlParams.set("lon", cartographicResult.lon.toFixed(4));
  urlParams.set("height", cartographicResult.height.toFixed(2));
  urlParams.set("az", orientationResult.azimuth.toFixed(2));
  urlParams.set("el", orientationResult.elevation.toFixed(2));
  urlParams.set("roll", orientationResult.roll.toFixed(2));

  if (params.useBatchedMesh) {
    urlParams.set("batched", 1);
  }
  window.history.replaceState(undefined, undefined, `#${urlParams}`);
}

function initFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const urlParams = new URLSearchParams(hash);
  if (urlParams.has("batched")) {
    params.useBatchedMesh = Boolean(urlParams.get("batched"));
  }

  if (!urlParams.has("lat") && !urlParams.has("lon")) {
    return;
  }

  // update the tiles matrix world so we can use it
  tiles.group.updateMatrixWorld();

  // get the position fields
  const camera = transition.camera;
  const lat = parseFloat(urlParams.get("lat"));
  const lon = parseFloat(urlParams.get("lon"));
  const height = parseFloat(urlParams.get("height")) || 1000;
  
  // Update the params to reflect the current position
  params.latitude = lat;
  params.longitude = lon;
  params.altitude = height;

  if (urlParams.has("az") && urlParams.has("el")) {
    // get the az el fields for rotation if present
    const az = parseFloat(urlParams.get("az"));
    const el = parseFloat(urlParams.get("el"));
    const roll = parseFloat(urlParams.get("roll")) || 0;

    // extract the east-north-up frame into matrix world
    WGS84_ELLIPSOID.getRotationMatrixFromAzElRoll(
      lat * MathUtils.DEG2RAD,
      lon * MathUtils.DEG2RAD,
      az * MathUtils.DEG2RAD,
      el * MathUtils.DEG2RAD,
      roll * MathUtils.DEG2RAD,
      camera.matrixWorld,
      CAMERA_FRAME
    );

    // apply the necessary tiles transform
    camera.matrixWorld.premultiply(tiles.group.matrixWorld);
    camera.matrixWorld.decompose(
      camera.position,
      camera.quaternion,
      camera.scale
    );

    // get the height
    WGS84_ELLIPSOID.getCartographicToPosition(
      lat * MathUtils.DEG2RAD,
      lon * MathUtils.DEG2RAD,
      height,
      camera.position
    );
    camera.position.applyMatrix4(tiles.group.matrixWorld);
  } else {
    // default to looking down if no az el are present
    WGS84_ELLIPSOID.getCartographicToPosition(
      lat * MathUtils.DEG2RAD,
      lon * MathUtils.DEG2RAD,
      height,
      camera.position
    );
    camera.position.applyMatrix4(tiles.group.matrixWorld);
    camera.lookAt(0, 0, 0);
  }
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

  // If we have a location sphere, update its visibility based on distance
  if (locationSphere) {
    // Make the sphere always visible
    locationSphere.visible = true;
    
    // Scale the sphere based on distance to maintain visual size
    const distance = camera.position.distanceTo(locationSphere.position);
    const baseScale = 1.0;
    const distanceScale = Math.max(1.0, distance / 100000);
    locationSphere.scale.set(distanceScale, distanceScale, distanceScale);
    
    // Update the video texture if it exists
    if (videoTexture) {
      videoTexture.needsUpdate = true;
      
      // If video is paused, try to play it
      if (videoElement && videoElement.paused) {
        videoElement.play().catch(e => {
          // Silent catch - we'll try again on next frame
        });
      }
    }
  }

  renderer.render(scene, camera);
  stats.update();

  // Only update hash when controls are being used, not during programmatic changes
  if (controls.enabled && !params.skipNextHashUpdate) {
    updateHash();
  }

  updateHtml();
}

function updateHtml() {
  // render html text updates
  let str = "";

  if (params.enableCacheDisplay) {
    const lruCache = tiles.lruCache;
    const cacheFullness = lruCache.cachedBytes / lruCache.maxBytesSize;
    str += `Downloading: ${tiles.stats.downloading} Parsing: ${tiles.stats.parsing} Visible: ${tiles.visibleTiles.size}<br/>`;
    str += `Cache: ${(100 * cacheFullness).toFixed(2)}% ~${(
      lruCache.cachedBytes /
      1000 /
      1000
    ).toFixed(2)}mb<br/>`;
  }

  if (params.enableRendererStats) {
    const memory = renderer.info.memory;
    const render = renderer.info.render;
    const programCount = renderer.info.programs.length;
    str += `Geometries: ${memory.geometries} Textures: ${memory.textures} Programs: ${programCount} Draw Calls: ${render.calls}`;

    const batchPlugin = tiles.getPluginByName("BATCHED_TILES_PLUGIN");
    const fadePlugin = tiles.getPluginByName("FADE_TILES_PLUGIN");
    if (batchPlugin) {
      let tot = 0;
      batchPlugin.batchedMesh?._instanceInfo.forEach((info) => {
        if (info.visible && info.active) tot++;
      });

      fadePlugin.batchedMesh?._instanceInfo.forEach((info) => {
        if (info.visible && info.active) tot++;
      });

      str += ", Batched: " + tot;
    }
  }

  if (statsContainer.innerHTML !== str) {
    statsContainer.innerHTML = str;
  }

  const mat = tiles.group.matrixWorld.clone().invert();
  const vec = transition.camera.position.clone().applyMatrix4(mat);

  const res = {};
  WGS84_ELLIPSOID.getPositionToCartographic(vec, res);

  const attributions = tiles.getAttributions()[0]?.value || "";
  document.getElementById("credits").innerText =
    GeoUtils.toLatLonString(res.lat, res.lon) + "\n" + attributions;
}
