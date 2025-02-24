<template>
  <div class="container-line">

    <svg xmlns="http://www.w3.org/2000/svg" width="1644" height="3037" viewBox="0 0 1644 3037" fill="none">
      <path d="M831 0.5C831 176.5 146 179.5 146 510.5C146 841.5 896 1381.5 1505.5 938.5C2115 495.5 458.853 800.853 265 1262.5C21.3694 1842.69 1983.1 1416.14 1505.19 1825.5C1381.7 1931.28 1312.44 2217.97 1155.5 2260.5C750.324 2370.3 390.693 1633.81 124 1958C-40.2323 2157.64 654.5 2549 92.5001 2261C-469.5 1973 1850.93 1906.75 1531 2370.5C1344.34 2641.06 716.993 2508.83 721.688 2837.5C722.821 2916.82 769.188 3035 769.188 3035" stroke="#69A9DD" stroke-width="8"/>
    </svg>
    
  </div>
</template>

<script setup>

  import { gsap } from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger

  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  onMounted(() => {
    nextTick(() => { // Ensure SVG is rendered
      let svg = document.querySelector('svg');
      let path = svg?.querySelector('path');

      if (svg && path) { // Check if both elements exist
        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength, // Set strokeDasharray to pathLength
          strokeDashoffset: pathLength, // Initialize with offset
        });

        gsap.fromTo(
          path,
          { strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              markers: true, // Uncomment for debugging ScrollTrigger
            },
          }
        );
      } else {
        console.error("SVG or path element not found!");
      }
    });
  });



</script>

<style>

  .container-line{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3000px;
    z-index: 1;
    transform: translateY(-15px);
  }

</style>