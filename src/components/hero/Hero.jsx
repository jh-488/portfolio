import "./Hero.css";
import { techstack } from "../../data/Data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__image">
          <img src="/assets/profile_image.webp" alt="Profile image" />
        </div>
        <div className="hero__info">
          <h4>Hello, I am Jihad!</h4>
          <p>Breathing Life into Websites</p>
        </div>
      </div>
      <div className="accomplishments wrapper">
        <div className="techstack">
          <h4>Tech Stack:</h4>
          {techstack.map((tech, index) => 
            <img title={tech.name} src={tech.icon} alt={`${tech.name} logo`} key={index}/>)}
        </div>
        <div className="certification">
          <h4>Certification:</h4>
          <p><a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank">Meta Front-End Developer Professional Certificate</a></p>
        </div>
      </div>
    </section>
  )
}

export default Hero
