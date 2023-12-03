import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navList, setNavList] = useState(false);

  const navRef = useRef(null);

  // Hide/Show navbar on scroll down/up
  useEffect(() => {
    let prevScroll = window.scrollY;

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        const navbar = navRef.current;

        if (prevScroll > currentScroll) {
            navbar.style.transform = "translateY(0)";
        } else {
            navbar.style.transform = "translateY(-8vh)";
        }

        prevScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <nav 
        className="navbar"
        ref={navRef}
    >
      <div className="container flex">
        <ul className="navbar__links left">
          <li>
            <a href="https://github.com/jh-488" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jihadhyadi" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <ul className={navList ? "navbar__links side" : "navbar__links right"}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hamburger">
          <button
            aria-label="Open/Close menu"
            onClick={() => setNavList(!navList)}
          >
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
