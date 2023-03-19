import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';


import { AppWrap, MotionWrap } from '../../wrapper';
import { Map} from '../../components';
import './Footer.scss';

const Footer = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you!"))
      
      .catch((error) => alert(error));
  };

  
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  

  return (
    <>
      <div className='app__footer-wrapper'>
      <h1 className="app__head-text">CONNECT WITH ME</h1>
      <div className="app__footer">
        <form 
        name="contact"
        data-netlify="true"
        method="POST"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        >
        <input type="hidden" name="form-name" value="contact"/>
        <input className="hover"  type="text" placeholder="Your Name" name="name" required />
        <input className="hover" type="email" placeholder="Your Email" name="email" required  />
        <textarea
              className="hover"
              placeholder="Your Message"
              name="message"
              required
              
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
  MotionWrap(Footer, 'app__footer-wrapper'),
  'contact',
);