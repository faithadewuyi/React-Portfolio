
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
        
       <p> I hold a Masters degree in Food Science and Technology and possess one year of experience in frontend development.</p>
        
        <p> I am constantly learning to improve my skills so as to create beautiful, functional websites with great User Experience. I am eager to collaborate on innovative projects, and I am equally excited about the prospect of joining a company as a frontend developer.</p>
        <p> My goal is to contribute to teams in the tech community in meaningful ways, bringing my unique blend of expertise to every challenge. I am open to exploring opportunities in diverse environments, from startups to established companies, where I can continue to grow and make significant contributions.
       </p>

        {/* <a href="" className="btnAbout">Download My Resume</a> */}
      </div>
    </div>
    </div>
  )
}

export default About
