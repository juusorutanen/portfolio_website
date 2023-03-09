import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';


import { AppWrap, MotionWrap } from '../../wrapper';
import { Map} from '../../components';
import './Footer.scss';

const Footer = () => {
  

  return (
    <>
    
      <div className='app__footer-wrapper'>
      <h1 className="app__head-text">CONNECT WITH ME</h1>
      <div className="app__footer">
        <form 
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="contact"/>
        <input className="hover"  type="text" placeholder="Your Name" name="name" />
        <input className="hover" type="email" placeholder="Your Email" name="email"   />
        <textarea
              className="hover"
              placeholder="Your Message"
              name="message"
              
            />
            <motion.button
          whileHover={{scale:1.1}}
          whileTap={{ scale: 0.9}}
          type="submit" className="app__anchor-tag" >Send Message</motion.button>
        </form>
        
        <div className="app__map">
        <Map/>
        </div>
        <footer className='app__footer-mobile'>
          <div className='app__social-icons'>
              <div> <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer"><BsGithub  /> </a></div>
              <div> <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></div>
              <div> <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </div>
          </div>
          <div className='app__footer-text'>juuso.rutanen@gmail.com</div>
        </footer>
    </div>
    </div>
     
       

        
      

      
    </>
   
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
);