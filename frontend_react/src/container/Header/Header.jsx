import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { animate, motion } from 'framer-motion';
import './Header.scss';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';

let boxVariants = {};
const isMobile = window.innerWidth < 768; 
if (!isMobile) {
  boxVariants = {
    whileInViewLeft: {
      x: [-250, 0],
      opacity: [0, 1],
      transition: {duration:1.3}
    },
    whileInViewRight: {
      x: [250, 0],
      opacity: [0, 1],
      transition: {duration:1.3}
    },
  };
}

const Header = () => {
  return (
    
    
    <div className='app__flex app__header-container'>
      <motion.div 
      variants={boxVariants}
      whileInView= "whileInViewLeft"
      className='app__header-text-container'>
      
        <h1 className="app__header-text">👋 Hi! I'm Juuso.</h1>
        <h2 className="app__header-text-smaller">I do <span>web development.</span></h2>
        <p className="app__header-text-paragraph">I'm a recent Business Information Technology graduate and my passion is web development. Currently I'm seeking for any vacant trainee/junior roles in the field of web development. 
        At the moment I'm learning React.js and enhancing my knowledge in JavaScript and CSS. I live in Helsinki, Finland.</p>
        <p className="app__header-text-paragraph">Please note that this website is currently <span> unfinished</span> and will be continously updated.</p>
          <a href="#projects">
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{ scale: 0.9}}
          type="button" className="app__header-cta-text"
          >View my projects</motion.button>
          </a>
          <div className='app__social-mobile'>
            <div> <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer"><BsGithub  /> </a></div>
            <div> <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></div>
            <div> <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </div>
        </div>
          </motion.div>
          
      <motion.div 
      variants={boxVariants}
      whileInView="whileInViewRight"
      className='app__person'>
        <div className='app__person-container'>
          <div className='app__person-circle'></div>
          <img className='app__person-img' src={images.juusoprofilephoto} alt ="Juuso Rutanen Profile"/>
        </div>
      </motion.div>
    </div>
    
    
  )
}

export default AppWrap(Header, 'home');