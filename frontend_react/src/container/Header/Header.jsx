import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { animate, motion } from 'framer-motion';
import './Header.scss';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';


const Header = () => {
  return (
   
    <div className='app__header-container'>
      <div className='app__header-text-container'>
        <h1 className="app__header-text">👋 Hi! I'm Juuso.</h1>
        <h2 className="app__header-text-smaller">I do web development.</h2>
        <p className="app__header-text-paragraph">I'm a recent Business Information Technology graduate and my passion is web development. Currently I'm open to any vacant trainee/junior roles in the field of web development. 
        At the moment I'm learning React.js and enhancing my knowledge in JavaScript and CSS. I live in Helsinki, Finland.</p>
        <p className="app__header-text-paragraph">Please note that this website is currently <span>very unfinished.</span></p>
        
          <a href="/#projects">
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
      </div>
      <div className='person'>
      <div className='app__header-image2' alt ="profile"><img src={images.background} alt ="logo"/></div>
      <div className='app__header-image1' alt ="profile"><img src={images.juusoprofilephoto} alt ="Juuso Rutanen"/></div>
      </div>
    </div>
    
  )
}

export default AppWrap(Header, 'home');