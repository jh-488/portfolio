import "./Contact.css";


const Contact = () => {
  return (
    <section className="contact padding" id="contact">
      <div className="container flex">
        <h2>Contact Me</h2>
        <div className="line"></div>
        <div className="socials">
          <a href="mailto:hyadi.j@gmail.com" target="_blank"><i className="fas fa-envelope"></i>Hyadi.J@Gmail.com</a>
          <a href="https://www.linkedin.com/in/jihadhyadi" target="_blank"><i className="fab fa-linkedin"></i>Linkedin</a>
          <a href="https://github.com/jh-488" target="_blank"><i className="fab fa-github"></i>Github</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
