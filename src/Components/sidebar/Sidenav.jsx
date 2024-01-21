import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import "./Sidenav.scss"
import Togglebuttons from "./toggleButtons/Togglebuttons";

const Sidenav = () => {
  const [open,setOpen] = useState(false)

  const variants ={
     open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
     },
     closed: {
     clipPath: "circle(30px at 50px 50px)",
     transition:{
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
     },
     },
  };
  return (
    <motion.div className="sidenav" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links/>
        </motion.div>
        <Togglebuttons setOpen = {setOpen}/>
      
    </motion.div>
  );
  
};

export default Sidenav;
