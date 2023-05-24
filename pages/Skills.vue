<template>
  <div class="outterPage p-2 pt-10 md:p-20">
    <div class="flex flex-col lg:gap-12">
        <div class="flex flex-col gap-12 pb-8 md:pb-16 md:min-w-[370px]">
          <div class="flex flex-row justify-center md:justify-start text-4xl md:text-6xl font-semibold">
            <span class="hover:text-emerald-400">
            Skills & Technologies
            </span>
          </div>
          <div class="flex flex-row justify-center md:justify-start text-lg md:text-xl">
          Currently working towards being a fullstack developer.<br>
          I like building responsive 
          and reactive websites using HTML, CSS, JS <br>
          and modern frameworks like Vue and tailwind.
          As for the backend I have experience with<br>
          c# and .NET and working towards getting more!
          Additionally good knowledge of SQL, Git<br>
          and of course editors such as VS and VSCode
          </div>
        </div>
        <div class="flex flex-col text-xl md:text-3xl font-semibold min-w-[270px]">
          <div class="flex flex-row justify-center md:justify-start">
            <span class="hover:text-emerald-400">
          Stack used for this Portfolio:
        </span>
          </div>
          <div class="flex flex-row flex-wrap justify-center md:justify-start">
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