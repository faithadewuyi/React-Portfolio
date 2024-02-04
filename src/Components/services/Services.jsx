import "./services.scss"
import { motion} from "framer-motion"

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p> I build websites that are not only visually appealing but also <br/>optimized for performance and user experience.</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer">
        <div  className="title">
          <img src="/people.webp"/>
          <h1>
            Creating <b>Elegant</b> Web Experiences
          </h1>
        </div>
        <div  className="title">
         
          <h1>
            and Embracing <b>Open Source</b> 
          </h1>
          
        </div>
      </motion.div>
      <div className="listContainer">
        <div className="box" >
          <h2>Git and Version <br/> Control</h2>
          <p>I excel in using Git and version control systems for effective project management and collaboration. My approach ensures seamless integration of code changes, maintaining project integrity and facilitating team workflows.</p>
        </div>
        <div className="box" >
          <h2>Responsive Web Design</h2>
          <p>I have experience designing and developing websites that are responsive.This allows for a consistent and user-friendly experience across all devices.</p>
        </div>
        <div className="box" >
          <h2>Front-End Frameworks and Libraries</h2>
          <p>I possess expertise in utilizing popular front-end frameworks like React.js, enabling me to develop complex web applications with speed and efficiency. </p>
        </div>
        <div className="box">
          <h2>Open Source Contributions</h2>
          <p>Passionate about open source, I actively contribute to various projects, leveraging my skills to enhance and innovate communal technologies. I engage in community discussions, provide feedback, and help with documentation, fostering a collaborative and inclusive tech environment.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Services
