import React, { useState }from 'react';
import {BsSunglasses, BsFillSunFill} from 'react-icons/bs';

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