<template>
<div class="outterPage p-10 md:p-20 pt-40">
  <div class="flex flex-row flex-wrap justify-between gap-12">
    <div class="flex flex-col">
        <div class="flex flex-col gap-12">
          <div class="text-4xl md:text-6xl flex-wrap font-semibold hover:text-emerald-400">
            Skills & Technologies
          </div>
          <div class="text-lg md:text-xl sm:pb-8 md:pb-16 min-w-[400px]">
            My main area of 
            expertise is front-end, <br> building websites using
            HTML, CSS, JS as basis,<br> using modern frameworks like Vue and tailwind.
          </div>
        </div>
      </div>
    <div class="flex flex-col pr-30 md:pr-0 text-xl md:text-3xl font-semibold">
      <div class="hover:text-emerald-400">
        Stack used for this Portfolio:
      </div>
      <div class="flex flex-row flex-wrap">
        
        <img src="/icons/html.svg" />
        <img src="/icons/css.svg" />
        <img src="/icons/js.svg" />
        <img src="/icons/vue.svg" />
        <img src="/icons/nuxt.svg" />
        <img src="/icons/tailwindcss.svg" />
        <img src="/icons/three.svg" />
        <img src="/icons/vscode.svg" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
img {
  @apply w-14 h-14
}
</style>