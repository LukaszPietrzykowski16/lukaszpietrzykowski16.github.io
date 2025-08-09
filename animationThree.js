import * as THREE from "three";
import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const threeD = document.querySelector(".three-d");

const renderer = new THREE.WebGLRenderer();

threeD.appendChild(renderer.domElement);

const camera = new PerspectiveCamera(45, 600 / 400, 0.1, 1000);
camera.position.set(20, 10, 20);
renderer.setSize(window.innerWidth, window.innerHeight, false);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151515);

let model;

const loader = new GLTFLoader();

loader.load(
  "https://raw.githubusercontent.com/LukaszPietrzykowski16/portfolio/main/tag3.gltf",
  (gltf) => {
    model = gltf.scene;
    scene.add(model);
  }
);

renderer.render(scene, camera);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.receiveShadow = true;
directionalLight.shadow.camera.bottom = 12;

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight2);
directionalLight2.position.set(30, 20, -20);
directionalLight2.receiveShadow = true;
directionalLight2.shadow.camera.bottom = 12;

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight3);
directionalLight3.position.set(20, 50, 10);
directionalLight3.receiveShadow = true;
directionalLight3.shadow.camera.bottom = -12;

function animate() {
  if (model) {
    model.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, false);
});
