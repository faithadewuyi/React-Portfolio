import { useRef } from 'react';
import "./projects.scss";
import {  FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import {motion, useScroll, useSpring } from "framer-motion"

const items = [
  {
    id: 1,
    title: 'Farm Website',
    img: '/3(2).png',
    description:
      'A fully responsive farm website. Abitim Farms website user-friendly web platform designed to provide visitors with a comprehensive view of the farms products with prices, activities, and values. ',
    stacks: [
      'HTML ',
      '|',
      'CSS ',
      '|',
      
      '|',
      ' Javascript ',
      
    ],
    live: 'https://abitim-farms.vercel.app',
    gitHub: 'https://github.com/faithadewuyi/Abitim-Farms',
  },

  {
    id: 2,
    title: 'My Portfolio',
    img: '/2(2).png',
    description:
      'This React-based portfolio website is a personal project designed to showcase my development projects, professional experience, and technical skills to potential employers and clients. .',
    stacks: [
      'HTML ',
      '|',
      ' Sass (SCSS) ',
      '|',
      ' React ',
      '|',
      
      ' Framer-Motion ',
         ],
    live: 'https://faithadewuyi.vercel.app/',
    gitHub: 'https://github.com/faithadewuyi/React-Portfolio',
  },

  {
    id: 3,
    title: 'Scent Dome',
    img: '/4.png',
    description:
      'Working collaboratively, I enhanced my teamwork abilities by contributing to the development of a streamlined two-page eCommerce website. This site was crafted to efficiently and stylishly showcase and sell products.As part of a collaborative team effort, I honed my skills in collaboration to developed a streamlined two-page eCommerce website designed to showcase and sell products with efficiency and style.',
    stacks: [
      'HTML ',
      '|',
      'CSS ',
      '|',
      'Javascript'
      
    ],
    live: 'https://devdivas-assignment-2.netlify.app/',
    gitHub:
    'https://github.com/faithadewuyi/DevDivas-Group-Assignment-2.git',
  },


  {
    id: 4,
    title: 'Age Calculator',
    img: '/1(2).png',
    description:
      'The Age Calculator is a simple yet effective web application designed to calculate age based on inputed birthdate. This tool provides an intuitive and user-friendly interface for quickly determining age. The project showcases my skills in frontend development and my ability to create practical, user-focused applications.',
    stacks: [
      'HTML ',
      '|',
      'CSS ',
      '|',
      'Javascript'
      
    ],
    live: 'https://age-calculator-sigma-ten.vercel.app/',
    gitHub:
    'https://github.com/faithadewuyi/Javascript-Projects.git',
  },
  {
    id: 3,
    title: 'Boomplay Clone',
    img: '/5.png',
    description:
      'In a team-based project, we developed a Boomplay Clone site to highlight our collaborative skills and teamwork. Through this joint effort, I sharpened my ability to work effectively with others while contributing to the creation website',
    stacks: [
      'HTML ',
      '|',
      'CSS ',
      
      
    ],
    live: 'https://boomplayclone.netlify.app/',
    gitHub:
    'https://github.com/OreoluwaRasheed/DevDIvas-Month-2-Project/tree/faith',
  },
 
];

const Single = ({ item }) => {

    return <section >
       <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
        <img src={item.img} alt=""/>
        </div>
        <div className="textContainer">
          <h2 >{item.title}</h2>
          <p>{item.description}</p>
          <span className="stacks">{item.stacks} </span>
           <div className="links"> 
                 <a
                   className="link"
                   href={item.live}
                   rel="noreferrer"
                   target="_blank"
                 >
                   <FaLink color="#bce0fb" />
                   <span>Live View</span>
                 </a>

                 <a
                   className="link"
                   href={item.gitHub}
                   rel="noreferrer"
                   target="_blank"
                 >
                   <FaGithub color="#bce0fb" />
                   <span>View Codes</span>
                 </a>
             </div >
             </div>
        </div>
       </div>
       </section>;
    
};
const Projects = () => {
  const ref = useRef();
  const {scrollYprogress} = useScroll({target: ref, offset: ["end start", "start start"],});

  const scaleX = useSpring(scrollYprogress,{
    stiffness: 100,
    damping: 40,
  });
  return (
  <div className="projects">
    <div className="progress">
      <h1>My Projects</h1>
      <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
    {items.map(item=> (
      <Single item={item} key={item.id}/>
    ))}
    </div>
    );
};

export default Projects;
       


