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
    title: 'Age Calculator',
    img: '/1(2).png',
    description:
      'The Age Calculator is a simple yet effective web application designed to calculate age based on inputed birthdate. This tool provides an intuitive and user-friendly interface for quickly determining age. The project showcases my skills in frontend development and my ability to create practical, user-focused applications.',
    stacks: [
      'HTML ',
      '|',
      'CSS ',
      '|',
      
    ],
    live: 'https://age-calculator-sigma-ten.vercel.app/',
    gitHub:
      'https://github.com/faithadewuyiOluwadahunsi/Motivational-Quotes-Generator-Fullstack',
  },

  {
    id: 3,
    title: 'My Portfolio',
    img: '/2(2).png',
    description:
      'A fully responsive and interacive portfolio webiste to show my skills.',
    stacks: [
      'HTML ',
      '|',
      ' Sass (SCSS) ',
      '|',
      ' React ',
      '|',
      
      ' Framer-Motion ',
      
      '|',
      ' Emailjs ',
    ],
    live: 'https://kodemaven-portfolio.vercel.https://faithadewuyi.vercel.app/',
    gitHub: 'https://github.com/faithadewuyi/React-Portfolio',
  },


];

const Single = ({ item }) => {

    return <section >
       <div className="container">
        <div className="wrapper">
        <img src={item.img} alt=""/>
        <div className="textContainer">
          <h2 >{item.title}</h2>
          <p>{item.description}</p>
          <span className="stacks">{item.stacks} </span>
          {/* <div className="links"> */}
                 <a
                   className="link"
                   to={item.live}
                   rel="noreferrer"
                   target="_blank"
                 >
                   <FaLink color="#bce0fb" />
                   <span>Live View</span>
                 </a>

                 <a
                   className="link"
                   to={item.gitHub}
                   rel="noreferrer"
                   target="_blank"
                 >
                   <FaGithub color="#bce0fb" />
                   <span>View Codes</span>
                 </a>
             {/* /div */}
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
       
//           <div className="wrapper">
//             <div className="imageContain">
//               <img src={item.img} alt="WebsiteImage" />
//             </div>
//             <div className="text">
//               <h2> {item.title} </h2>
//               <p> {item.description} </p>
//               <span className="stacks">{item.stacks} </span>

//               <div className="links">
//                 <Link
//                   className="link"
//                   to={item.live}
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <FontAwesomeIcon icon={faDisplay} color="#bce0fb" />
//                   <span>Live View</span>
//                 </Link>

//                 <Link
//                   className="link"
//                   to={item.gitHub}
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <FontAwesomeIcon icon={faGithub} color="#bce0fb" />
//                   <span>View Codes</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// };

// Single.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
//     live: PropTypes.string.isRequired,
//     gitHub: PropTypes.string.isRequired,
//   }).isRequired,
// }
// const Projects = () => {
//   return (
//     <div className="projects">
      
//     </div>
    
//   )
// }


