<template>

    <div class="projects_section">
        <div class="container">

            <h2>Projects</h2>
            <div class="projects">
                <div class="project" v-for="(project, index) in projects[0].projects" :key="index" data-aos="fade-up" :data-aos-duration="1500" :data-aos-delay="500">
                    
                        <div class="project_int">
                            <a :href="project.url" target="_blank" rel="noopener noreferrer">
                                <div class="img_section" :style="`background-color: ${project.background}`" >
                                    <span>
                                        <img :src="project.image" :alt="project.name">
                                    </span>
                                </div>
                            </a>
                            <div class="content">
                                <p v-html="project.name"></p>
                                <p v-html="project.description"></p>
                                <div class="developed">
                                    <span v-html="project.developed"></span>
                                    <a :href="project.at.companyurl" target="_blank" rel="noopener noreferrer" class="company" v-html="project.at.companyname"></a>
                                </div>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    </div>

</template>

<script setup>

    import projects from '~/static/projects.json';

</script>


<style scoped lang="scss">

    .projects_section{
        padding: 5rem 0;
        z-index: 2;
        position: relative;

        h2{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .projects{
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

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
        
        }
    }

    @media screen and (min-width: 768px) {
        
        .projects_section{
            .projects{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 2rem;
            }
        }

    }


    @media screen and (min-width: 1024px) {
        
        .projects_section{

            h2{
                font-size: 3rem;
                margin-bottom: 2rem;
            }

            .projects{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 2rem;
            }
        }

    }


    @media screen and (min-width: 1240px) {
        
        /* .projects_section{
            .projects{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 2rem;
            }
        } */

    }

</style>