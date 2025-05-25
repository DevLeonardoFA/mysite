<template>
    
    <div class="resume">

        <div class="container">

            <!-- back button -->
            <NuxtLink to="/" class="back-button">
                <FontAwesomeIcon :icon="faArrowLeft" />
            </NuxtLink>

            <div class="head">

                <div class="infobase">
                    <h1 class="name">
                        Leonardo F. Alonso
                    </h1>
                    <h2 class="role">
                        Web Developer
                    </h2>
                </div>

                <div class="tecnologies">
                    
                    <table class="tecnologies-table" border="1">
                        <tr>
                            <td>
                                <h2>Tecnologies</h2>
                            </td>
                            <td>
                                <h2>Years</h2>
                            </td>
                        </tr>


                        <tr v-for="(tecnology, index) in tecnologies[0].tecnologies" :key="index">
                            <td>
                                <span class="tec">
                                    {{ tecnology.name }}
                                </span>
                            </td>
                            <td>
                                <span class="years">
                                    {{ tecnology.years }}
                                </span>
                            </td>
                        </tr>
                        


                    </table>

                </div>

            </div>

            <hr>

            <div class="resume-content">

                <div class="experiences" id="experiences">
                    <h2>Experience</h2>
                    
                    <div class="experience" v-for="(experience, index) in experiences" :key="index"
                    
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    :data-aos-delay="500 + (index * 100)"
                    
                    >
                        <h3>{{experience.company}} - {{experience.title}}</h3>
                        <h4>{{experience.from}} - {{experience.to}} | {{experience.country}}</h4>
                        <p v-html="experience.description"></p>
                    </div>

                </div>
                
                <div class="education">

                    <h2>Education</h2>

                    <div class="education-content" v-for="(education, index) in education" :key="index"
                    
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    :data-aos-delay="500 + (index * 100)"
                    
                    >
                        <h3>{{education.school}} - {{education.course}}</h3>
                        <h4>{{education.yearStart}} - {{education.yearEnd}} | {{education.country}}</h4>
                        <p v-html="education.description"></p>
                    
                        <ul>
                            <li v-for="(activity, index) in education.extra_activity" :key="index">
                                <h4>{{activity.activity}}</h4>
                                <p v-html="activity.description"></p>
                            </li>
                        </ul>`
                    
                    </div>
                    

                </div>



            </div>



        </div>


    </div>

</template>

<script setup lang="ts">

    // import font awesome
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    import tecnologies from '~/static/tecnologies.json';
    import experiences from '~/static/experiences.json';
    import education from '~/static/education.json';

</script>

<style scoped lang="scss">

    .resume{
        position: relative;
    
        .container{
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 2rem;
            box-sizing: border-box;
            padding-top: 50px;

            .back-button{
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
            }

            .head{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 2rem;
                h1{
                    color: #fff;
                    font-size: 3rem;
                    font-weight: 600;
                    margin-bottom: 0.4rem;
                }
                h2{
                    color: #fff;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                
                table{
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                    width: 100%;
                    
                    tr{
                        td{
                            padding: 0 1rem 0 0 ;
                            &:first-child{
                                width: 200px;
                            }
                            &:last-child{
                                width: auto;
                            }
                        }
                    }
                }
            }

            .resume-content{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 2rem;

                h2{
                    color: #fff;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                h3{
                    color: #fff;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                h4{
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                p{
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .experience, .education-content{
                    margin: 2rem 0 4rem 0;
                    position: relative;
                    padding-left: 2rem;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0px;
                        width: 2px;
                        height: 100%;
                        background-color: #fff;
                    }
                }

            }


        }

    }

</style>