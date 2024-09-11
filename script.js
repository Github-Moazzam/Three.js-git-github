// import * as THREE  from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import imageSource from './image.png'   
// console.log(imageSource)

// const image = new Image()
// const texture = new THREE.Texture(image)
// image.addEventListener('load', () =>
// {
//     texture.needsUpdate = true
// })
// image.src = 'image.png'
// texture.colorSpace = THREE.SRGBColorSpace   

// const canvas = document.querySelector('canvas.canvas1')

// const scene = new THREE.Scene()
// const geometry = new THREE.SphereGeometry(2 ,2,2,2,2,2)
// const material = new THREE.MeshBasicMaterial({ color:'red', wireframe:true})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
// const sizes = {
//     width: window.innerWidth,
//     height:window.innerHeight
// }

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z=4
// scene.add(camera)

// const controls = new OrbitControls( camera,canvas);
// controls.autoRotate=true


// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias:true

// })
// renderer.setSize(sizes.width, sizes.height)

// renderer.render(scene, camera)
// controls.update();

// const tick =()=>{


//     mesh.rotation.y += 0.01
//     mesh.rotation.x += 0.01
//     controls.update();
//     renderer.render(scene, camera)
//     window.requestAnimationFrame(tick)
// }

// tick()


import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();



// Create Cubes
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
scene.add(box1);


// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;

renderer.setSize(sizes.width, sizes.height);

// Clock
const clock = new THREE.Clock();


window.addEventListener('resize', () => {

  console.log('resized')
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);

})




const tick = () => {

  camera.lookAt(box1.position);

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};









tick();
