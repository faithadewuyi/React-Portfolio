import Sidenav from "../sidebar/Sidenav"
import "../navbar.scss"
import {motion} from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className= "navbar">
      {/* Sidenav */}
      <Sidenav/>
      <div className="wrapper">
        <motion.img 
        initial ={{opacity:0, scale:0.5 }} 
        animate={{opacity: 1, scale:1}}
        transition={{duration: 1.5}}
        className="logo" src="/gg.png" alt="logo"></motion.img>
        <div className="socials">
          <a href="https://github.com/faithadewuyi" className="fa"><FaGithub/></a>
          <a href="https://linkedin.com/in/faith-adewuyi-64923542/" className="fa"><FaLinkedin/></a>
        
          <a href="https://twitter.com/adewuyi_faith" className="bs"><BsTwitterX /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
