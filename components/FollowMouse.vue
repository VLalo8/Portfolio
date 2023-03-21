<template>
  <div>
  <canvas ref="theCanvas" />
  </div>
</template>

<script setup lang="ts">
  import {Ref} from 'vue';
  import {Scene, PerspectiveCamera, Raycaster, WebGLRenderer, AmbientLight, Object3D, Vector3, DirectionalLight, Plane, Vector2, PlaneHelper} from 'three';
  import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
  import { useWindowSize } from '@vueuse/core';

  const { width: winWidth, height: winHeight } = useWindowSize();
  const aspectRatio = computed(()=> winWidth.value / winHeight.value);

  let renderer: WebGLRenderer;
  
  const theCanvas: Ref<HTMLCanvasElement | null> = ref(null);
  
  const scene = new Scene();
  
  const camera = new PerspectiveCamera(60, aspectRatio.value, 1, 1000);
  camera.position.set(0, 0, 7);
  scene.add(camera);
  
  const ambientLight = new AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);

  let base = new Object3D();
  scene.add(base);

const loader = new GLTFLoader().setPath( 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/' );
loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
  gltf.scene.scale.setScalar(2);
  base.add( gltf.scene );
} );

  function setRenderer() {
    if(theCanvas.value) {
    renderer = new WebGLRenderer({ canvas: theCanvas.value, alpha: true })
    renderer.setPixelRatio(Math.min(aspectRatio.value, 2))
    renderer.setSize(winWidth.value, winHeight.value)
    }
  }

var plane = new Plane(new Vector3(0, 0, 1), -2);
var raycaster = new Raycaster();
var mouse = new Vector2();
var pointOfIntersection = new Vector3();


function onMouseMove(event){
  mouse.x = ( event.clientX / winWidth.value ) * 2 - 1;
  mouse.y = - ( event.clientY / winHeight.value ) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  pointOfIntersection.setX(pointOfIntersection.x-0.8);
  base.lookAt(pointOfIntersection);
}

onMounted(()=>{
    
    setRenderer()
    loop()
  })
  
  const loop = () => {
    window.addEventListener("mousemove", onMouseMove, false)
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
  }
</script>

<style scoped>

</style>