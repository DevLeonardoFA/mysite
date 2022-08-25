import projects from './../assets/projects/Projects.json';

export function Projects(){
    return (
        <section className="projects" id="projects">
            <div className="title">
                <h2>
                    My Sites and Projects
                </h2>
            </div>
            <div className="conteudo">
                
                { 
                
                projects.map( project => (
                    <div className="project" key={project.id}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='open_project'>
                            <img src={`${project.image}`} alt={project.title} />
                            <h4>{project.title}</h4>
                        </a>
                    </div>
                ))

                }

            </div>
        </section>
    );
}