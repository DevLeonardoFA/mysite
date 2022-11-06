import projects from './../assets/projects/Projects.json';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

var width_screen = window.screen.width;


export function Projects(){


    if(width_screen < 450){


        return (
            <section className="projects" id="projects">
                <div className="title">
                    <h2>
                        My Sites
                    </h2>
                </div>
                <div className="conteudo">
    
                    <div className="mobile">
                        
        
                        <Slider {...settings}>
        
                        {
        
                            projects && projects.map( project => (
                                <div className="project item" key={project.id}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='open_project'>
                                        <img src={project.image} alt={project.title} />
                                        <h4>{project.title}</h4>
                                    </a>
                                </div>
                            ))
        
                        }
        
                        </Slider>
        
        
                    </div>
    
                </div>
    
            </section>
        );


    }else{

        return (
            <section className="projects" id="projects">
                <div className="title">
                    <h2>
                        My Sites
                    </h2>
                </div>
                <div className="conteudo">
        
                    <div className="desktop">
        
                        {
        
                            projects && projects.map( project => (
                                <div className="project" key={project.id}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='open_project'>
                                        <img src={project.image} alt={project.title} />
                                        <h4>{project.title}</h4>
                                    </a>
                                </div>
                            ))
        
                        }
        
                    </div>
    
                </div>
    
            </section>
        );  
        
    }

    
    
}