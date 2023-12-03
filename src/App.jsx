import './App.css';
import Hero from './components/hero/Hero';
import Navbar from "./components/navbar/Navbar";
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
