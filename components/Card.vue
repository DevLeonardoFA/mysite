<template>
    <div class="project" ref="target" :style="{ transform: CardTransform, transition: 'transform 0.25s ease-out' }">

      <div class="project_int" >
          <a :href="project?.project?.url" target="_blank" rel="noopener noreferrer">
              <div class="img_section" :style="`background-color: ${project?.project?.background}`" >
                  <span>
                      <img :src="project?.project?.image" :alt="project?.project?.name">
                  </span>
              </div>
          </a>
          <div class="content">
              <p v-html="project?.project?.name"></p>
              <p v-html="project?.project?.description"></p>
              <div class="developed">
                  <span v-html="project?.project?.developed"></span>
                  <a :href="project?.project?.at.companyurl" target="_blank" rel="noopener noreferrer" class="company" v-html="project?.project?.at.companyname"></a>
              </div>
          </div>
      </div>

    </div>
</template>

<script setup>

  // props
  const project = defineProps(['project']);

  import { useMouseInElement } from '@vueuse/core';

  const target = ref(null);

  const {
    elementX,
    elementY,
    isOutside,
    elementHeight,
    elementWidth,
  } = useMouseInElement(target);

  const CardTransform = computed(() => {

    const MaxRotation = 10;

    const xr = (MaxRotation / 2 - ( elementY.value / elementHeight.value ) * MaxRotation).toFixed(2);
    const yr = (MaxRotation / 2 - ( elementX.value / elementWidth.value ) * MaxRotation).toFixed(2);

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${xr}deg) rotateY(${yr}deg)`;

  });

</script>

<style scoped lang="scss">


.project{
  background-color: transparent;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  background: #222;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;

    .img_section{
      width: 100%;
      aspect-ratio: 1/0.5;
      display: grid;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      img{
        width: 100%;
        max-width: 100px;
        object-fit: contain;
        aspect-ratio: 1/1;
        margin: 0 auto;
      }
    }
  }

  .content{
    padding: 0 15px 5px;
    margin-top: 20px;
    
    p, span{
      color: #fff;
      font-weight: 600;
      margin: 0.5rem 0;
      line-height: 1.2;
      display: block;
      user-select: none;
    }

    .developed{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .company{
      margin-left: 5px;
      color: #fff;
      font-weight: 800;
    }
  }

}


</style>