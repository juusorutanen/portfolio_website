import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

import './Header.scss';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';


const Header = () => {
  return (

    <div className='app__header-container'>
      <div className='app__header-text-container'>
        <h1 className="app__header-text">👋 Hi! I'm Juuso.</h1>
        <h2 className="app__header-text-smaller">I do web development.</h2>
        <p className="app__header-text-paragraph">I'm a recent business information technology graduate and currently open to any vacant junior roles in web development. 
        At the moment I'm learning React.js and enhancing my knowledge in JavaScript and CSS.</p>
        <p className="app__header-text-paragraph">Please note that this website is currently <span>very unfinished.</span></p>
        <div className='app__social-mobile'>
            <div> <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer"><BsGithub  /> </a></div>
            <div> <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></div>
            <div> <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </div>
        </div>
      </div>
      <div className='app__header-image' alt ="profile"><img src={images.profile} alt ="logo"/></div>
    </div>
  )
}

export default AppWrap(Header, 'home');