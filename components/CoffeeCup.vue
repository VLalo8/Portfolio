<template>
  <div>
  <canvas class="w-full h-full" ref="theCanvas" />
  </div>
</template>

<script setup lang="ts">
  import {Ref} from 'vue';
  import {Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, Color, Fog} from 'three';
  import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
  import { useWindowSize, useDevicePixelRatio } from '@vueuse/core';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  const theCanvas: Ref<HTMLCanvasElement | null> = ref(null);
  const { width: winWidth, height: winHeight } = useWindowSize();

  const aspectRatio = computed(()=> winWidth.value / winHeight.value);
  const { pixelRatio } = useDevicePixelRatio();

  let renderer: WebGLRenderer;
  let controls: OrbitControls;
  
  const scene = new Scene();

  const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
  camera.position.set(0, 0, 0.23);
  scene.add(camera);
  
  const ambientLight = new AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);

  const gltfLoader = new GLTFLoader()

  gltfLoader.load('/coffee_cup/scene.gltf', (gltf) => {
    scene.add(gltf.scene)
    console.log(gltf)
  })

  function updateRenderer() {
    renderer.setSize(winWidth.value/4,winHeight.value/4)
    renderer.setPixelRatio(pixelRatio.value)
  }

  function setRenderer() {
    if(theCanvas.value) {
    renderer = new WebGLRenderer({ canvas: theCanvas.value, alpha: true })
    updateRenderer()
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;
    controls.maxPolarAngle = 0.95;
    controls.minPolarAngle = 0.95;
    controls.enableZoom = false;
    }
  }

  watch(aspectRatio, ()=> {
  updateRenderer()
})

  onMounted(() => {
    setRenderer()
    loop()
});

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
  }
  </script>