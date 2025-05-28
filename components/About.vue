<template>

  <div class="about">
    <div class="container">
      <div class="text">

        <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">About Me</h2>
        <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1200">

          👋 Hello! I'm Leo. 👋
          <br><br>
          With 26 Years old and a bachelor's degree, 
          I've been working in the IT area since 2018.
          <br><br>
          Specialized in Web Development, Front-end and Back-end,
          I've been working with a lot of different technologies,
          and I'm always looking to learn new ones.
          <br><br>
          Also with great attention to details and always loking for
          ways to improve my work and deliver the best possible
          results.

        </p>

      </div>
      <div class="meinpixel" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500">
        <img src="/me_in_pixel.png" alt="me in pixel">
      </div>
      <div class="buttons">
        
        <!-- send to resume page -->
        <NuxtLink to="/resume" class="resume-button" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Resume</NuxtLink>

      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">

    .about{
        min-height: 60vh;
        z-index: 2;
        position: relative;      

        .container{
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 4rem 2rem;
            display: grid;
            align-content: center;
            justify-content: center;
            background: #554b83;  
            border-radius: 5px;

            .text{
              text-align: center;
              width: 400px;

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

            .meinpixel{
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              img{
                max-width: 250px;
                width: 100%;
              }

              &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100px;
                background: linear-gradient(to bottom, transparent,#554b83 100%);
                z-index: 1;
              }
            }

            .buttons{
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 2rem;

              .resume-button{
                background: #fff;
                color: #000;
                padding: 1rem 2rem;
                border: none;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                text-decoration: none;

                &:hover{
                  background: #000;
                  color: #fff;
                }
              }
            }

        }

        

    }

    @media screen and (min-width: 991px) {
        
        .about{
            .container{
              padding: 7rem 4rem;
              grid-template-columns: repeat(2, 1fr);
              border-radius: 50px;

              .text{
                text-align: left;
                width: 100%;

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

              .buttons{
                justify-content: flex-start;
              }

              .meinpixel{
                img{
                  max-width: 500px;
                }
              }
                
            }
        }

    }

</style>