<template>
  <div class="fixed h-full w-full overflow-x-hidden bg-zinc-800">
    <Navbar v-if="screenSize == 'big'" />
    <div
     :class="showNav ? 'block' : 'hidden'">
      <SmallNavbar />
    </div>
    <button class="fixed mt-2 ml-2" v-if="screenSize=='small'" @click="store.navToggle">
      <img src="/icons/bar.svg" />
    </button>
    <NuxtLoadingBar />
      <div class="pl-0 md:pl-32 h-screen">
        <slot />
      </div>
  <div v-if="screenSize == 'big'" class="fixed bottom-0 right-0">
    <div class="flex flex-col items-center text-white text-2xl" v-if="isHomePage">
    This portfolio couldn't <br>
    have been made without:
    <img src="/icons/rotate.svg" class="w-12 h-12" />
    </div>
    <ClientOnly class="w-1/4 h-1/4 z-0">
      <CoffeeCup />
    </ClientOnly>   
  </div>
</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useNavState } from '../stores/NavState';
import { useRoute } from 'vue-router'

const route = useRoute()

let isHomePage = route.path === '/'

watch(() => route.path, (newPath) => {
  isHomePage = newPath === '/'
})

const store = useNavState();

const { width } = useWindowSize();

const screenSize =  computed(()=> {
  return width.value > 767 ? 'big' : 'small'
})

const showNav = computed(()=> {
  if (store.navActive == true && screenSize.value == 'small') {
    return true
  }
  else {
    return false
  }
})

</script>

<style scoped>
.isHidden {
  display: none;
}
</style>