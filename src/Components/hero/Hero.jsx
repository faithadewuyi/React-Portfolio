
import "./Hero.scss";
import { motion } from "framer-motion"

const textVariants ={
  initial:{
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1.5,
      staggerChidren: 1.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration: 2,
      repeat: Infinity,


    }
  }
};
const Hero = () => {
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = import.meta.env.BASE_URL + "faith_adewuyi.pdf"
  link.download = "faith_adewuyi.pdf";
  link.click();
};
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>Faith Adewuyi</motion.h2>
        <motion.h1 variants={textVariants}>Frontend Developer <br/>and Open Source Contributor</motion.h1>
        <motion.div className="buttons">
          <motion.button variants={textVariants}>Explore my Works</motion.button>
          <motion.button variants={textVariants}onClick={handleDownload} className="resume">Download Resume</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton"src="/scroll.png"></motion.img>
      </motion.div>
      </div>
    
      <div className="imageContainer">
        <img src="faith.png"></img>
      </div>
    </div>
  )
}

export default Hero
