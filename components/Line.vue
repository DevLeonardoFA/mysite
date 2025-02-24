<template>
  <div class="container-line">

    <svg xmlns="http://www.w3.org/2000/svg" width="1590" height="3349" viewBox="0 0 1590 3349" fill="none">
      <path d="M774 0.5C774 176.5 89 179.5 89 510.5C89 841.5 839 1381.5 1448.5 938.5C2058 495.5 401.853 800.853 208 1262.5C-35.6306 1842.69 1926.11 1416.14 1448.19 1825.5C1324.7 1931.28 1255.44 2217.97 1098.5 2260.5C693.325 2370.3 333.694 1633.81 67 1958C-97.2323 2157.64 653.5 3067 91.5001 2779C-470.5 2491 1875.43 2691.75 1555.5 3155.5C1368.84 3426.06 685.493 2775.83 690.188 3104.5C691.321 3183.82 725 3348 725 3348" stroke="#69A9DD" stroke-width="8"/>
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
              // markers: true, // Uncomment for debugging ScrollTrigger
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