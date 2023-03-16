<template>
  <div class="fixed h-full w-full overflow-x-hidden">
    <Navbar />
    
    <NuxtLoadingBar :height="4"/>
      <div class="pl-32 h-screen">
        <slot />
    </div>
</div>

</template>

<script setup>

</script>

<style scoped>

</style>