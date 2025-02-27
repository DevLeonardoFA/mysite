<template>

    <div class="projects_section">
        <div class="container">

            <h2>Projects</h2>
            <div class="projects">

                

                <Card 
                v-for="(project, index) in projects[0].projects" 
                :key="index" data-aos="fade-up" 
                :data-aos-duration="1500" 
                :data-aos-delay="500" 
                :project="project" />

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