<template>
    
    <div class="resume">

        <div class="container">

            <!-- back button -->
            <NuxtLink to="/" class="back-button">
                <!-- add arrow font awesome -->
                <font-awesome-icon icon="fa-solid fa-arrow-left" />
                Back to Home
            </NuxtLink>

            <div class="head">

                <div class="infobase">
                    <h1 class="name">
                        Leonardo F. Alonso
                    </h1>
                    <h2 class="role">
                        Web Developer
                    </h2>
                    <a href="mailto:devleonardofernandes@gmail.com">
                        devleonardofernandes@gmail.com
                    </a>
                    <a href="tel:+35677509674">+356 77 509 674</a>
                    <a href="https://www.linkedin.com/in/leonardo-f-alonso/" target="_blank" 
                    rel="noopener noreferrer">linkedin.com/in/leonardo-f-alonso/</a>
                    

                </div>

                <div class="languages">
                    <h2>Languages</h2>
                    <div class="lang">
                        <h3>Portuguese</h3>
                        <small>C2 - Mother Language</small>
                    </div>
                    <div class="lang">
                        <h3>English</h3>
                        <small>B2/C1 - Advanced</small>
                    </div>
                    <div class="lang">
                        <h3>Italian</h3>
                        <small>B2 - Basic (learning)</small>
                    </div>
                </div>

                <!-- <div class="tecnologies">
                    
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

                </div> -->

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
                    
                        <ul class="extra-activity">
                            <li v-for="(activity, index) in education.extraActivity" :key="index">
                                <h4>{{activity.activity}}</h4>
                                <p v-html="activity.description"></p>
                            </li>
                        </ul>`
                    
                    </div>
                    

                </div>

            </div>


        </div>

        

        <Projetos />


    </div>

</template>

<script setup lang="ts">

    // import font awesome
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
                font-size: 1.4rem;
                color: #fff;
                text-decoration: none;
            }

            .head{
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 2rem;

                h2{
                    color: #fff;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .infobase{
                    h1{
                        color: #fff;
                        font-size: 3rem;
                        font-weight: 600;
                        margin-bottom: 0.4rem;
                    }
                }

                .languages{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: 50px 35px auto;
                    grid-gap: 0rem;
                    margin-bottom: 1rem;

                    h2{
                        grid-column: 1 / span 3; 
                    }

                    .lang{
                        grid-row: 2;

                        h3{
                            color: #fff;
                            font-size: 1.3rem;
                            font-weight: 600;
                            margin-bottom: 5px;
                        }

                        small{
                            display: block;
                            color: #fff;
                            font-size: 0.8rem;
                            font-weight: 600;
                            grid-row: 3;
                        }
                    }

                    
                    
                    span{
                        display: block;
                        color: #fff;
                        font-size: 1rem;
                        font-weight: 600;
                        margin-bottom: 0.4rem;
                    }
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

                a{
                    display: block;
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: 0.2rem;
                    line-height: 1.5;
                    text-decoration: none;
                    width: max-content;
                }
            }

            .resume-content{
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 2rem;
                overflow: hidden;

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

                    .extra-activity{
                        padding: 1rem 0rem 1rem 3rem;
                        list-style-type: disc;
                        color: #fff;
                        font-size: 1rem;
                    }

                }

            }


        }

    }

    @media screen and (min-width: 1199px) {
        
        .resume{
            .container{
                .head{
                    grid-template-columns: 1fr 1fr;
                }
                .resume-content{
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        }
        
    }

</style>