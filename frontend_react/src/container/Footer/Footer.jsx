import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';


import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { Map} from '../../components';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    
      <div className='app__footer-wrapper'>
      <h1 className="app__head-text">CONNECT WITH ME</h1>
      <div className="app__footer">
        <form className="app__form">
        <input className="hover"  type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        <input className="hover" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        <textarea
              className="hover"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            <motion.button
          whileHover={{scale:1.1}}
          whileTap={{ scale: 0.9}}
          type="button" className="app__anchor-tag" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</motion.button>
        </form>
        <div className="app__map">
        <Map/>
        </div>
        <footer>
        <div className='app__social-mobile'>
            <div> <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer"><BsGithub  /> </a></div>
            <div> <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></div>
            <div> <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </div>
        </div>
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