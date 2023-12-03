import "./Projects.css";
import { projects } from "../../data/Data";
import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="projects padding" id="projects">
      <div className="container">
        <h2 className="title">PROJECTS</h2>
        <div className="projects__cards">
            {projects.map((project, index) => 
                <ProjectCard 
                    key={index}
                    project={project}    
                />
            )}
        </div>
      </div>
    </section>
  )
}

export default Projects
