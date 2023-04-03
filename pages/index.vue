<template>
<div class="outterPage p-2 pt-10 md:p-20 flex flex-col justify-between">
  <div>
    <ul class="h-48 writer-text">
      <div class="text-first">
        Hello,
      </div>
      <div class="text-second">
        I'm Vasilis,
      </div>
      <div class="text-third">
        Web Developer
      </div>
    </ul>
  </div>
  <NuxtLink to="/Contact" class="relative block mb-52 w-40 h-10 md:w-52 md:h-14 px-6 py-3 text-center text-lg md:text-2xl font-semibold text-white rounded-lg group">
    <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-emerald-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-emerald-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
    <span class="relative">Contact me!</span>
  </NuxtLink>
</div>
</template>

<script setup>

</script>

<style scoped>
.writer-text {
  letter-spacing: 2px;
  @apply text-white text-5xl sm:text-6xl font-mono overflow-hidden font-bold;
}

.text-first {
  animation: typing-first 5s steps(6,end) infinite;
  @apply overflow-hidden whitespace-nowrap hover:text-emerald-400
}
.text-second {
  animation: typing-second 5s steps(12,end) infinite;
  @apply overflow-hidden whitespace-nowrap hover:text-emerald-400
}
.text-third {
  animation: typing-third 5s steps(13,end) infinite;
  @apply overflow-hidden whitespace-nowrap hover:text-emerald-400
}


@keyframes typing-first {
  0% {
    width: 0%
  }
  20% {
    width: 206px
  }
  70%{
    width: 206px
  }
  90% {
    width:206px
  }
  100% {
    width: 0%
  }
}

@keyframes typing-second {
  0% {
    width: 0%
  }
  20% {
    width: 0%
  }
  40% {
    width: 416px
  }
  80% {
    width:416px
  }
  90% {
    width:0%
  }
  100% {
    width: 0%
  }
}

@keyframes typing-third {
  0% {
    width: 0%
  }
  40% {
    width: 0%
  }
  60% {
    width: 452px
  }
  70% {
    width:452px
  }
  80% {
    width:0%
  }
  100% {
    width: 0%
  }
}
</style>