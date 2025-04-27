import '../styles.css'; // Import the CSS file

import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
} from "three";
import { Globe } from "../components/globe";

let globe, scene, renderer, camera;

function init() {
  // scene
  scene = new Scene();

  // renderer
  renderer = new WebGLRenderer({
    antialias: true,
    depth: true,
    logarithmicDepthBuffer: true,
  });
  const container = document.getElementById('container')
  container.appendChild(renderer.domElement);

  // camera
  const aspect = window.innerWidth / window.innerHeight
  camera = new PerspectiveCamera(75, aspect, 10, 1e6);
  camera.position.set(4800000, 2570000, 14720000);
  camera.lookAt(0, 0, 0);

  // Create the globe
  globe = new Globe(scene, camera, renderer);
  scene.add(globe.tiles.group);

  window.addEventListener("resize", onWindowResize);
  onWindowResize();

  animate();
}

function onWindowResize() {
  // camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

function animate() {
  camera.updateMatrixWorld();
  globe.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

window.addEventListener('load', init);
