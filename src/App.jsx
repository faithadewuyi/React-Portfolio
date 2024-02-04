import "./app.scss"
import Navbar from "./Components/Navbar/Navbar";
 import Hero from "./Components/hero/Hero";
import About from "./Components/about/About";
 import Parallax from "./Components/parallax/Parallax";
// import Services from "./Components/services/Services";
// import Projects from "./Components/projects/Projects";
// import Contacts from "./Components/contact/Contacts"
const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
       <Hero/> 
    </section>
    <section id="About"><About/></section>
     <section id="Services"><Parallax type="skills"/></section>
    {/*<section><Services/></section> 
    <section id="Projects"><Parallax type="projects"/></section> 
    <Projects/> */}
    {/* <section id="Contact"><Contacts/></section> */}
    
    
  </div>;
};

export default App;
