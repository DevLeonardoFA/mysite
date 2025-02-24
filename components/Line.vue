<template>
  <div class="container-line">
    <svg xmlns="http://www.w3.org/2000/svg" width="1627" height="3004" viewBox="0 0 1627 3004" fill="none" class="svg">
      <path d="M755 4.5C530.246 57.6906 527.092 327.346 769.5 461.5C1011.91 595.654 738.5 1200 1348 757C1957.5 314 301.353 619.353 107.5 1081C-136.131 1661.19 2030.92 1383.64 1553 1793C1429.51 1898.78 1338.44 1938.47 1181.5 1981C776.324 2090.8 416.694 1354.31 150 1678.5C-14.2322 1878.14 655 2626 93 2338C-469 2050 1851.43 1983.75 1531.5 2447.5C1344.84 2718.06 764.805 2476.33 769.5 2805C770.633 2884.32 817 3002.5 817 3002.5" stroke="#69A9DD" stroke-width="8"/>
    </svg>
  </div>
</template>

<script setup>

  import { gsap } from 'gsap';


  onMounted(() => {

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
  }

</style>