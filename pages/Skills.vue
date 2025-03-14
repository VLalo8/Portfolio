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
          I am a fullstack software engineer.<br>
          I like working on APIs, websites and web apps.<br>
          Backend Experience: C#, ASP .NET Core, Entity Framework, MVC, SQL<br>
          Frontend Experience: HTML, CSS, JavaScript, React, Vue.js, Nuxt.js, TailwindCSS, Bootstrap, Knockout.js,
          Three.js<br>
          Tools: Visual Studio, Visual Studio Code, Rider, Git, GitHub, Azure, Trello, Postman, Swagger, Docker<br>
          Other: Agile, Scrum, CI/CD, Design Patterns, Clean Code, Refactoring, Code Reviews, Debugging, Testing<br>
        </div>
      </div>
      <div class="flex flex-col text-xl md:text-3xl font-semibold min-w-[270px]">
        <div class="flex flex-row justify-center md:justify-start">
          <span class="hover:text-emerald-400">
            Stack used for this Portfolio:
          </span>
        </div>
        <div class="flex flex-row flex-wrap justify-center md:justify-start">
          <img class="pr-1" src="/icons/html.svg" />
          <img class="pr-1" src="/icons/css.svg" />
          <img class="pr-1" src="/icons/js.svg" />
          <img class="pr-1" src="/icons/vue.svg" />
          <img class="pr-1" src="/icons/nuxt.svg" />
          <img class="pr-1" src="/icons/tailwindcss.svg" />
          <img class="pr-1" src="/icons/three.svg" />
          <img class="pr-1" src="/icons/vscode.svg" />
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