import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { animate, motion } from 'framer-motion';
import './Header.scss';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';




const Header = () => {
  return (
    
    
    <div className='app__flex app__header-container'>
      
      <div className='app__header-text-container'>
        <h1 className="app__header-text">👋 Hi! I'm Juuso.</h1>
        <h2 className="app__header-text-smaller">An aspiring <span>Software Developer.</span></h2>
        <p className="app__header-text-paragraph">I'm a recent Business Information Technology graduate and my passion is programming. Currently I'm seeking for any vacant trainee/junior roles in the field of software/web development. 
        </p>
        <p className="app__header-text-paragraph">Please note that this website is currently <span> unfinished</span> and will be continously updated.</p>
          <a className='app__anchor-tag' href="#about">
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{ scale: 0.9}}
          type="button" className="app__button-primary" >More about me</motion.button>
          </a>
          
          <div className='app__social-mobile'>
            <div> <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer"><BsGithub  /> </a></div>
            <div> <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></div>
            <div> <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </div>
        </div>
          </div>
          
      <div 
      className='app__person'>
        <div className='app__person-container'>
          <div className='app__person-circle'></div>
          <img className='app__person-img' src={images.juusoprofilephoto} alt ="Juuso Rutanen Profile"/>
        </div>
      </div>
    </div>
    
    
  )
}

export default AppWrap(Header, 'home');