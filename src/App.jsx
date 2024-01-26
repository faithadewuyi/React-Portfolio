import "./app.scss"
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import About from "./Components/about/About";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><About/></section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Services/></section> 
    <section id="Projects"><Parallax type="projects"/>Projects1</section>
    <section id="Contact">Project2</section>
    
    <section>Contact</section>
  </div>;
};

export default App;
