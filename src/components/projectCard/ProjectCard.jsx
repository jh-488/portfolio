import { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({project}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project__card">
      <div className="project__image">
        <img 
          src={project.image} 
          alt={`${project.name} cover`} 
          style={{
            transform: hover ? `translateY(${project.hoverY})` : "translateY(0%)",
            transition: "transform 10s ease-in-out"
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}  
        />
      </div>
      <div className="project__info">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      <div className="project__stack">
        {project.stack.map((item, index) => 
            <div key={index} className="stack-images">
              <img 
              title={item.name}
              src={item.icon}
              alt={`${item.name} logo`}
              />
            </div>
        )}
      </div>
      <div className="project__links">
        <a href={project.github} target="_blank"><i className="fa-brands fa-github"></i>Github</a>
        {project.name === "Portfolio Checker" ? <a className="disabled_link" title="Not available yet"><i className="fa-solid fa-arrow-up-right-from-square"></i>Live Site</a> : <a href={project.demo} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i>Live Site</a>}
      </div>
    </div>
  )
}

export default ProjectCard
