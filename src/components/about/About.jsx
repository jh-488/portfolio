import "./About.css";

const About = () => {
  return (
    <section className="about padding" id="about">
      <div className="container">
        <h2 className="title">ABOUT ME</h2>
        <div className="content">
          <div className="about__image">
            <img src="../../src/assets/about-img.webp" alt="about section image" />
          </div>
          <div className="about__info">
            <h4>A Front-end Developer based in Germany  <i className="fa fa-location-dot"></i></h4>
            <p>
              I'm a Front-end Developer from Morocco, living in Germany. Proficient in creating clean,
              user-friendly interfaces. I work with frameworks like React and
              enjoy optimizing code for smooth website performance. My toolkit
              includes HTML, CSS and JavaScript, helping me bring designs to
              life with simplicity and efficiency. I'm passionate about learning
              and staying updated with the latest trends in web development. As
              a team player, I thrive for collaborating with colleagues to
              deliver impactful and responsive web experiences. Excited to
              contribute my skills to projects that prioritize clean code and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
