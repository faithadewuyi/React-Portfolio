
import "./about.scss"
const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="aboutMeContainer">
        <div className="aboutMe">
        <div className="aboutImage">
          <img src="./heroo.png"></img>
        </div>
      </div>
      <div className="aboutText">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ducimus architecto eaque debitis mollitia repellat nam, quam similique tempore commodi quas nisi ipsum obcaecati numquam? Adipisci officia dolores deleniti ullam.</p>
        <a href="#contact" className="btnAbout">Link Me up</a>
      </div>
    </div>
    </div>
  )
}

export default About
