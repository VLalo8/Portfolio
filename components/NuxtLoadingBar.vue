<script setup>
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  height: {
    type: Number,
    default: 3,
  },
});
// Options & Data
const data = reactive({
  percent: 0,
  show: false,
  canSucceed: true,
});
// Local variables
let _timer = null;
let _throttle = null;
let _cut;

// Functions
const clear = () => {
  _timer && clearInterval(_timer);
  _throttle && clearTimeout(_throttle);
  _timer = null;
};
const start = () => {
  clear();
  data.percent = 0;
  data.canSucceed = true;
  data.show = true;

  if (props.throttle) {
    _throttle = setTimeout(startTimer, props.throttle);
  } else {
    startTimer();
  }
};
const set = (num) => {
  data.show = true;
  data.canSucceed = true;
  data.percent = Math.min(100, Math.max(0, Math.floor(num)));
};
const increase = (num) => {
  data.percent = Math.min(100, Math.floor(data.percent + num));
};
const decrease = (num) => {
  data.percent = Math.max(0, Math.floor(data.percent - num));
};
const pause = () => clearInterval(_timer);
const resume = () => startTimer();
const finish = () => {
  data.percent = 100;
  hide();
};
const hide = () => {
  clear();
  setTimeout(() => {
    data.show = false;
    setTimeout(() => {
      data.percent = 0;
    }, 400);
  }, 500);
};
const startTimer = () => {
  data.show = true;
  _cut = 10000 / Math.floor(props.duration);
  _timer = setInterval(() => {
    increase(_cut);
  }, 100);
};

// Hooks
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', start);
nuxtApp.hook('page:finish', finish);

onBeforeUnmount(() => clear);
</script>

<template>
  <div>
  <div v-show="data.show" class="backdrop flex items-center justify-center select-none">
    <div class="text-black loading rounded-md w-4/5 h-1/3 md:w-1/3 md:h-1/3 z-50">
      <div class="loading-first">
      <span style="color:#36c0c0">function</span>
      <span style="color:#72b646"> loading</span>
      <span style="color:#ffd714">(){</span>
      </div>
      <div class="loading-second">
        <span style="color:#eb6572">&ensp; if</span>
        <span style="color:#da6fba"> (</span>
        <span style="color:#6199ef">isLoading</span>
        <span style="color:#da6fba">){</span>
        <span style="color:#eb6572">return</span>
        <span style="color:#e5c07b"> 'Zzz'</span>
        <span style="color:#c0b9bf">;</span>
        <span style="color:#da6fba">}</span>
      </div>
      <div class="loading-third">
      &ensp;<span style="color:#eb6572"> else</span>
      <span style="color:#da6fba"> {</span>
        <span style="color:#eb6572">return</span>
        <span style="color:#e5c07b"> 'Loaded!'</span>
        <span style="color:#c0b9bf">;</span>
        <span style="color:#da6fba">}</span>
      </div>
      <div class="loading-fourth">
      &ensp;<span style="color:#ffd714"> }</span>
      </div>
      <div class="loading-fifth">
        <span style="color:#72b646">loading</span>
      <span style="color:#ffd714">()</span>
      <span style="color:#c0b9bf">;</span>
      </div>
     </div>
  </div>
  <div
    class="nuxt-progress"
    :class="{
      'nuxt-progress-failed': !data.canSucceed,
    }"
    :style="{
      width: data.percent + '%',
      left: data.left,
      height: props.height + 'px',
      opacity: data.show ? 1 : 0,
      backgroundSize: (100 / data.percent) * 100 + '% auto',
    }"
  />
  </div>
</template>

<style>
.nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 0%;
  opacity: 1;
  transition: width 0.1s, height 0.4s, opacity 0.4s;
  background: repeating-linear-gradient(
    to right,
    #a7f3d0 0%,
    #6ee7b7 50%,
    #34d399 100%
  );
  z-index: 999999;
}
.backdrop {
  background: rgba(0,0,0,0.8);
  @apply top-0 fixed w-full h-full z-40
}
.loading {
  background-color:#1a1b26;
}
.loading > div {
  letter-spacing: 2px;
  @apply  font-mono text-xl md:text-2xl;
}


.loading-second {
  animation: anim-second 1.5s steps(5,end) infinite;
  @apply overflow-hidden whitespace-nowrap;
}
.loading-third {
  animation: anim-third 1.5s steps(5,end) infinite;
  @apply overflow-hidden whitespace-nowrap;
}
.loading-fourth {
  animation: anim-fourth 1.5s steps(5,end) infinite;
  @apply overflow-hidden whitespace-nowrap;
}
.loading-fifth {
  animation: anim-fifth 1.5s steps(5,end) infinite;
  @apply overflow-hidden whitespace-nowrap;
}

  @keyframes anim-second {
  0% {
    opacity: 0
  }
  19.9%{
    opacity: 0
  }
  20%  {
    opacity: 1
  }
  100%{
    opacity: 1
  }
}
  @keyframes anim-third {
  0% {
    opacity: 0
  }
  39.9% {
    opacity: 0
  }
  40% {
    opacity: 1
  }
  100%{
    opacity: 1
  }
}
@keyframes anim-fourth {
  0% {
    opacity: 0
  }
  59.9% {
    opacity: 0
  }
  60% {
    opacity: 1
  }
  100%{
    opacity: 1
  }
}
@keyframes anim-fifth {
  0% {
    opacity: 0
  }
  79.9% {
    opacity: 0
  }
  80% {
    opacity: 1
  }
  100%{
    opacity: 1
  }
}
</style>