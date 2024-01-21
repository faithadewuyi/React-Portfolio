import Sidenav from "../sidebar/Sidenav"
import "../navbar.scss"
import {motion} from "framer-motion"
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
          <a href="https://github.com/faithadewuyi"><img src = "/github.png"></img></a>
          <a href="https://www.linkedin.com/in/faith-adewuyi-64923542/"><img src = "/linkedin.jpg"></img></a>
        
          <a href="https://twitter.com/adewuyi_faith"><img src = "/twitter.png"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
