import "./parallax.scss" 
import {motion} from "framer-motion"

const Parallax = ({type}) => {
  return (
    <div className="parallax" style={{background:type==="skills" ? "linear-gradient(180deg, #0c0c1d, #111132)" : "linear-gradient(180deg, #0c0c1d, #505064)",}}>
      <h1>{type==="skills" ? "My Skills" : "View my projects"}</h1>
      <motion.div className="mountains"></div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax
