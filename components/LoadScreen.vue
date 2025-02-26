<template>
  <div class="loadscreen">
    
    
    <img src="/loadscreen_large.gif" alt="">

    <div class="progress-bar" :style="'conic-gradient(#fff ' + progress_white + '%, #000 ' + progress_black + '%, #000 0 100%)'">

    </div>


  </div>
</template>

<script lang="ts" setup>
import { LoadScreen } from "#components";


  const progress_white = ref(0); // 0 to 100
  const progress_black = ref(100); // 100 to 0

  onMounted(() => {

    const interval = setInterval(() => {

      progress_white.value += 10;
      if (progress_white.value >= 100) {
        
        var LoadScreen = document.querySelector('.loadscreen');
        LoadScreen?.classList.add('hidden');
        clearInterval(interval);

        
      }

    }, 100);



  });


</script>

<style scoped lang="scss">

  .loadscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    z-index: 4;

    img {
        width: 500px;
    }

    &.hidden{
      animation: fadeout 1s ease-in forwards;
    }
    
  }

  @keyframes fadeout {

    0%{
      opacity: 1;
    }
    99%{
      opacity: 0;
    }
    100%{
      opacity: 0;
      display: none;
    }

    
  }

</style>