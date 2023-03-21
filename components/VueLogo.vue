<template>
  <div>
  <canvas ref="theCanvas" />
  </div>
  </template>
  
  <script setup lang="ts">
  import {Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, Object3D, Vector3} from 'three';
  import {Ref} from 'vue';
  import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';  
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
  
  let renderer: WebGLRenderer;
  let controls: OrbitControls;
  
  const theCanvas: Ref<HTMLCanvasElement | null> = ref(null);
  
  const scene = new Scene();
  
  const gltfLoader = new GLTFLoader();
  
  const camera = new PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.set(0, 0, 1)
  scene.add(camera);
  
  const ambientLight = new AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);
  
  gltfLoader.load('/vue-logo/vue.gltf', gltf => {
    scene.add(gltf.scene)
    console.log(gltf)
  })

  function setRenderer() {
    if(theCanvas.value) {
    renderer = new WebGLRenderer({ canvas: theCanvas.value, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize((100),(100))
    setControls()
    }
  }

  function setControls() {
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.minPolarAngle = 1.4
    controls.maxPolarAngle = 1.4
    controls.minDistance = 0.28
    controls.maxDistance = 0.28
    controls.rotateSpeed = 0.25
  }

  onMounted(()=>{
    setRenderer()
    loop()
  })
  
  const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
  }
  </script>
  
  <style scoped>

  </style>