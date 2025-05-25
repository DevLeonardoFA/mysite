<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>

import 'lenis/dist/lenis.css'

// let smoother
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

onMounted(() => {

  // // Initialize Lenis
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // gsap.ticker.lagSmoothing(0);

});

</script>  
