<template>
<div class="justify-between left-0 h-full w-32 fixed bg-zinc-900 flex flex-col">
  <div class="self-start bg-black w-full h-40">
    
  </div>
  <nav class="items-center flex flex-col border-t-zinc-800 border-t w-full">
    <div>
      Home
    </div>
    <div>
      About
    </div>
    <div>
      Skills
    </div>
    <div>
      Contact
    </div>
  </nav>
  <div class="flex justify-center mb-20">
    <div class="flex flex-col justify-center gap-6">
      <img src="/icons/linkedin.svg" />
      <img src="/icons/github.svg" />
      <img src="/icons/resume.svg" />
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
nav > div {
  @apply border-b-zinc-800 border-b w-full text-center leading-13 text-zinc-400
}
</style>