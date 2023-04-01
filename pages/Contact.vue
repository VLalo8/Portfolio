<template>
<div class="outterPage flex flex-col items-center">
  <ClientOnly class="w-2/3 h-2/3">
  <FollowMouse />
  </ClientOnly>
  <div class="self-start pl-36">
    <form class="flex flex-col gap-5 w-96" accept-charset="UTF-8" action="https://www.formbackend.com/f/37be8c47c3637d22" method="POST">
      <div class=" w-96 grid grid-cols-2 gap-2">
        <input type="text" id="name" name="name" placeholder="Name" required>
        <input type="email" id="email" name="email" placeholder="Email" required>
      </div>
      <div class=" w-96">
        <input class="w-96" type="text" id="subject" name="subject" placeholder="Subject">
      </div>
      <div class="h-20 w-96">
        <textarea class="h-20 w-96 bg-zinc-700 text-lg md:text-xl" type="text" id="message" name="message" placeholder="Message" />
      </div>
  <button type="submit">Submit</button>
</form> 
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
input {
  @apply bg-zinc-700 text-lg md:text-xl pl-3 p-2 rounded-md focus:outline-none focus:ring-zinc-900 focus:ring-2 valid:border-green-500 invalid:border-red-500 required:border-red-500
}
textarea {
   resize: horizontal;
   @apply min-w-full max-w-xl relative z-10 rounded-md focus:outline-none focus:ring-zinc-900 focus:ring-2
}
</style>