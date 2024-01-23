
import "./hero.scss";
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
          <motion.button variants={textVariants}onClick={handleDownload}>Download Resume</motion.button>
          </motion.div>
          <motion.img variants={textVariants}src="/scroll.png"></motion.img>
      </motion.div>
      </div>
      <div className="slidingText">
        Open Source Contributor
      </div>
      <div className="imageContainer">
        <img src="heroo.png"></img>
      </div>
    </div>
  )
}

export default Hero
