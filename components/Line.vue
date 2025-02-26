<template>
  <div class="container-line">

    <svg xmlns="http://www.w3.org/2000/svg" width="1590" height="3349" viewBox="0 0 1590 3349" fill="none" class="desktop">
      <path d="M774 0.5C774 176.5 89 179.5 89 510.5C89 841.5 839 1381.5 1448.5 938.5C2058 495.5 401.853 800.853 208 1262.5C-35.6306 1842.69 1926.11 1416.14 1448.19 1825.5C1324.7 1931.28 1255.44 2217.97 1098.5 2260.5C693.325 2370.3 333.694 1633.81 67 1958C-97.2323 2157.64 653.5 3067 91.5001 2779C-470.5 2491 1875.43 2691.75 1555.5 3155.5C1368.84 3426.06 685.493 2775.83 690.188 3104.5C691.321 3183.82 725 3348 725 3348"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="599" height="4969" viewBox="0 0 599 4969" fill="none" class="mobile">
      <path d="M293 0.5C293 0.5 258.604 34.0967 272 50.5C282.236 63.0334 302.105 44.5356 313 56.5C330.002 75.1701 266.828 81.7837 272 106.5C276.21 126.618 309.96 119.172 313 139.5C316.306 161.607 276.234 161.66 277 184C277.608 201.753 291.549 207.636 302 222C375.328 322.777 526.503 284.803 564.5 403.5C590.846 485.801 588.134 553.708 536.5 623C457.495 729.024 325.413 611.235 199 650C123.311 673.21 50.4977 663.49 14.5 734C-25.691 812.724 32.5053 876.275 80.5 950.5C183.957 1110.5 545.5 1397 536.5 1124C527.5 851 83.6546 1111.79 36.5 1315.5C-16.7251 1545.43 471.362 1424.54 539.5 1650.5C566.522 1740.11 580.947 1802.21 548.5 1890C480.635 2073.62 -23.8652 1861.9 68.5 2034.5C121.291 2133.15 281 2351.5 322 2168C363 1984.5 102.867 2225.99 54.5 2340.5C-31.2198 2543.43 700.597 2341.36 586 2529.5C517.966 2641.2 364 2610 278 2661C192 2712 64.404 2832.72 85.5 2975C113.772 3165.67 454.036 2990.24 542.5 3161.5C670.257 3408.83 -151.953 3511.01 62.5 3688.5C144.24 3756.15 299.082 3665.4 322 3769C338.825 3845.06 224.083 3868.91 231 3946.5C237.631 4020.89 327.468 4028.45 343 4101.5C360.595 4184.25 286.936 4225.9 286 4310.5C285.024 4398.68 352.333 4493.67 343 4529C343 4529 304.113 4596.64 315 4640C315 4640 329.413 4663.96 334 4681C344.286 4719.21 323.2 4741.99 321 4781.5C318.012 4835.17 327 4919 327 4919V4969" />
    </svg>
    
  </div>
</template>

<script setup>

  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {

    var width = window.innerWidth;
    let svg;

    if (width <= 991) {
    
      svg = document.querySelector('.mobile');

    }else{

      svg = document.querySelector('.desktop');

    }

    let path = svg?.querySelector('path');

    


      
    if (svg && path) {

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
            start: "top 25px",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    } else {
      console.error("SVG or path element not found!");
    }

  });



</script>

<style scoped lang="scss">

  .container-line{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: max-content;

    svg{
      margin: 0 auto;
      display: block;
      width: 100%;
      overflow-clip-margin: unset;
      overflow: unset;
      fill: none;
      height: max-content;

      path{
        /* stroke: #69A9DD ; */
        stroke: #977fff70;
        stroke-width: 8;
      }

      &.mobile{
        display: block;
      }

      &.desktop{
        display: none;
      }

    }
  }

  @media screen and (min-width: 991px) {
    
    .container-line{

      svg{
        &.desktop{
          display: block;
        }

        &.mobile{
          display: none;
        }
      }

    }

  }

</style>