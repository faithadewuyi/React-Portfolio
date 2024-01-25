
import "./about.scss"
const About = () => {
  return (
    <div className="about">
      <h2>Get to Know Me</h2>
      <div className="aboutMeContainer">
        <div className="aboutMe">
        <div className="aboutImage">
          <img src="./heroo.png"></img>
        </div>
      </div>
      <div className="aboutText">
        
       <p> I am a passionate frontend developer with a unique background of masters degree in food science.</p>
        
        <p>My fascination with technology, especially the creative aspects of web design and development, inspired me to transition from food science to frontend development. I have dedicated myself to mastering languages like HTML, CSS, and JavaScript, and frameworks such as React.This technical proficiency, combined with my scientific training, enables me to approach projects with both precision and creativity.</p>
       <p>I am eager to collaborate on innovative projects and I am equally excited about the prospect of joining a company as a frontend developer. My goal is to contribute to teams in the tech community in meaningful ways, bringing my unique blend of expertise  to every challenge.</p>
       <p>I am open to exploring opportunities in diverse environments, from startups to established companies, where I can continue to grow and make significant contributions.
       </p>

        <a href="#contact" className="btnAbout">Link Me up</a>
      </div>
    </div>
    </div>
  )
}

export default About
