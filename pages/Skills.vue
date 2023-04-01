<template>
<div class="outterPage p-10 md:p-20 md:py-40 flex flex-row md:gap-8 justify-start flex-wrap lg:flex-nowrap">
        <div class="flex flex-col gap-12 sm:pb-8 md:pb-16 md:min-w-[370px]">
          <div class="text-4xl md:text-6xl font-semibold">
            <span class="hover:text-emerald-400">
            Skills & Technologies
            </span>
          </div>
          <div class="text-lg md:text-xl">
            My main area of 
            expertise is front-end, <br> building responsive
            and reactive websites <br> using 
            HTML, CSS, JS and modern frameworks <br>
            like Vue and tailwind.
      </div>
      </div>
    <div class="flex flex-col text-xl md:text-3xl font-semibold min-w-[270px]">
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
</template>

<script setup>

</script>

<style scoped>
img {
  @apply w-14 h-14
}
</style>