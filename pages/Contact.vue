TODO:Compare with main, keep mobile flexibility from sub, but fix lg screen
<template>
<div class="outterPage flex flex-row items-center justify-center gap-0 2xl:gap-10 p-2 pt-10 md:p-8">
  <div class="flex flex-col h-auto md:h-full items-center justify-center gap-10 md:min-w-[600px]">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-12">
    <div class="text-4xl md:text-6xl font-semibold">
      <span class="hover:text-emerald-400">
      Contact Me
      </span>
    </div>
    <div class="text-lg md:text-xl md:min-w-[370px]">
      Interested to hear about new opportunities,<br>
      Don't hesitate to message be about new ideas,<br>
      offers or projects!
    </div>
  </div>
    <form class="flex flex-col gap-3 w-80" action="https://formsubmit.co/vlalogiannis@gmail.com" method="post">
      <div class="flex flex-row gap-2">
        <input type="text" id="name" name="name" placeholder="Name" required>
        <input type="email" id="email" name="email" placeholder="Email" required>
      </div>
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="https://v-lalo.netlify.app/Contact">
      <textarea placeholder="Your Message" name="message" rows="4" required />
        <button type="submit" class="relative z-10 block w-40 h-10 md:w-52 md:h-14 px-6 py-3 text-center text-lg md:text-2xl font-semibold text-white rounded-lg group">
    <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-emerald-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-emerald-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
    <span class="relative">Message me!</span>
        </button>
    </form>
    </div>
  <div v-if="bigWidth && bigHeight" class="flex flex-col pr-20">
    <span class="hover:text-emerald-400 text-4xl">More info about me!</span>
    <img src="/icons/arrowLeft.svg" class="w-28 h-2w-28" />
  </div>
</div>
<ClientOnly v-if="bigWidth">
  <FollowMouse />
  </ClientOnly>
</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();

const bigWidth =  computed(()=> {
  return width.value > 767 ? true : false
})

const bigHeight =  computed(()=> {
  return height.value > 690 ? true : false
})

</script>

<style scoped>
input {
  @apply bg-zinc-700 w-full text-lg md:text-xl pl-3 p-2 rounded-md focus:outline-none focus:ring-zinc-900 focus:ring-2 valid:border-green-500 invalid:border-red-500 required:border-red-500
}
textarea {
   resize: horizontal;
   @apply bg-zinc-700 text-lg md:text-xl pl-3 p-2 min-w-full max-w-xl relative z-10 rounded-md focus:outline-none focus:ring-zinc-900 focus:ring-2
}
</style>