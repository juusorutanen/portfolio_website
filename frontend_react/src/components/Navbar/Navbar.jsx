import React from 'react';
import {BsSunglasses, BsFillSunFill} from 'react-icons/bs';
import './Navbar.scss';
import { images } from '../../constants';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
        <a href="#home">
            <img src={images.logo} className="logo" alt ="logo" />
            </a>
        </div>
        <div className='container'>
        <ul className="app__navbar-links">
          {['home','about','projects', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>  
            </li>
            
          ))}
        </ul>
        <div className='darkMode'>
          {darkMode ? (
              <BsFillSunFill className='darkModeOff' onClick={toggle} />
            ) : (
              <BsSunglasses className='darkModeOn' onClick={toggle}  />
            )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;