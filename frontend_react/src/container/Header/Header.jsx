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
        <h2 className="app__header-text-smaller">A <span>Software</span> Developer.</h2>
        <p className="app__header-text-paragraph">I'm a Business Information Technology graduate with a passion to programming. Looking for an opportunity to apply creative, solution-oriented, and communicative skills on a development team. </p>
        
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