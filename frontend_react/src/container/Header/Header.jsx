import React from 'react'
import { motion } from 'framer-motion';
import './Header.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';




const Header = () => {
  return (
    <div className='app__flex app__header-container'>
      
      <div className='app__header-text-container'>
        <h1 className="app__header-text">👋 Hi! I'm Juuso.</h1>
        <h2 className="app__header-text-smaller">An aspiring <span>Front-end Developer.</span></h2>
        <p className="app__header-text-paragraph">I'm a recent Business Information Technology graduate and my passion is programming. I love being creative and I never run out of ideas. Currently I'm seeking for any vacant trainee/junior roles in the field of software/web development. 
        </p>
        
        <motion.a 
        whileHover={{scale:1.1}}
        whileTap={{ scale: 0.9}}className='app__anchor-tag' href="#about">More about me </motion.a>
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

export default AppWrap(MotionWrap(Header, 'home'), 'home');