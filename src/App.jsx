import "./app.scss"
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero"
const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">About</section>
    <section id="Skills">Services</section>
    <section id="Projects">Projects1</section>
    <section id="Contact">Project2</section>
    <section>Project3</section>
    <section>Contact</section>
  </div>;
};

export default App;
