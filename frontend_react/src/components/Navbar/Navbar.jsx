import React, { useState }from 'react';
import {HiMenu, HiX} from 'react-icons/hi';
import {BsSunglasses, BsFillSunFill} from 'react-icons/bs';


import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
import { useContext } from "react";

import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [toggle2, setToggle2] = useState(false);   
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt ="logo" />
        </div>
        <div className='container'>
        <ul className="app__navbar-links">

          {['home','work', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
  
              <a href={`#${item}`}>{item}</a>  
            </li>
            
          ))}
        </ul>

        


        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle2(true)}/>

            {toggle2 && (
              <motion.div
                whileInView={{x: [300,0]}}
                transition={{ duration: 0.85, ease: 'easeOut'}}
              >
              <HiX className="hiX"onClick={() => setToggle2(false)} />
              <ul>
                {['home', 'work', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle2(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div> 
            )}
        </div>
        <div className='darkMode'>
          {darkMode ? (
              <BsSunglasses className='darkModeOff' onClick={toggle} />
              
            ) : (
              <BsFillSunFill className='darkModeOn' onClick={toggle}  />
            )}

            
            
            </div>
        </div>
    </nav>
  )
}

export default Navbar;