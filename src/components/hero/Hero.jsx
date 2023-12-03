import "./Hero.css";
import { techstack_icons } from "../../data/Data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__image">
          <img src="../../src/assets/profile_image.png" alt="Profile image" />
        </div>
        <div className="hero__info">
          <h4>Hello, I am Jihad!</h4>
          <p>A web developer with focus on frontend</p>
        </div>
      </div>
      <div className="accomplishments wrapper">
        <div className="techstack">
          <h4>Tech Stack:</h4>
          {techstack_icons.map((icon, index) => 
            <img src={icon} key={index}/>)}
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
