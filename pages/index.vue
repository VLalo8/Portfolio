<template>
<div class="outterPage p-20">
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
</div>
</template>

<script setup>

</script>

<style scoped>
.writer-text {
  letter-spacing: 2px;
  @apply text-white text-3xl md:text-6xl font-mono overflow-hidden font-bold select-none;
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