<template>

  <div class="about">
    <div class="container">
      <div class="text">
        <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">About Me</h2>
        <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1200">
          I am 25 years old and have been a developer for 7 years.
          I am very passionate about what I do, I like working in a
          team, helping them grow and achieve great results.
        </p>
        <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1800">
          Throughout my career, I have dedicated myself to
          developing projects, optimizing processes and supporting
          customers in search of practical and efficient solutions.
          My goal is to always give my best and help the team
          grow.
        </p>

      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">

    .about{
        min-height: 60vh;
    
        .container{
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 4rem 0;

            h2{
                color: #fff;
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 1rem;
                span{
                    display: block;
                }
            }
        
            p{
                color: #fff;
                font-size: 0.9rem;
                font-weight: 600;
                margin-bottom: 1.3rem;
                line-height: 1.5;
            }

        }

        

    }

    @media screen and (min-width: 768px) {
        
        .about{
            .container{
              padding: 7rem 0;
                h2{
                    font-size: 3rem;
                    span{
                        display: inline-block;
                    }
                }

                p{
                  max-width: 1000px;
                  font-size: 1.5rem;
                }
                
            }
        }

    }

</style>