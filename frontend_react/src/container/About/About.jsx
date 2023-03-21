import React, {useState} from 'react'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import data from './data';

import { BsFillTreeFill} from 'react-icons/bs';

import './About.scss';


const About = () => {

  const [showMore, setShoWMore] = useState(false);
  const { text } = data;
  return (
    <div className='app__about'>
      <div className='app__about-text-container'>
        <h1 className="app__head-text">ABOUT ME</h1>
        <p className="app__about-text-paragraph">I have a background working in customer service which has given me a customer-oriented approach and excellent problem-solving skills.
        I love helping people and finding solutions to problems. 
        <span>In my spare time I enjoy building websites/apps and generally improve my web development skills. </span>
        Ultimately, I’m a developer because I am always excited to learn. I’d love the opportunity to apply my knowledge in a professional setting and learn from others. 
        When I'm not learning I enjoy playing videogames, photography, and throwing frisbees into small cages (mostly <BsFillTreeFill/>).
        <br/>
        {showMore ? text : `${text.substring(250, 250)}`}
        <button className="read-more-btn" onClick={()=> setShoWMore(!showMore)}>
          {showMore ? "Read less": "Read more"}
        </button>
         </p>
          </div>

        <div className='app__skills-container'>
        <h2 className='app__head-text'>TOOLS</h2>
        <div className='app__skill-wrapper2'>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.react} alt ="React"/>
            <figcaption className='app__skills-caption'>React</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.javascript} alt ="JavaScript"/>
            <figcaption className='app__skills-caption'>JavaScript</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.css} alt ="CSS"/>
            <figcaption className='app__skills-caption'>CSS</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.html5} alt ="HTML5"/>
            <figcaption className='app__skills-caption'>HTML5</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.git} alt ="Git"/>
            <figcaption className='app__skills-caption'>Git</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.sass} alt ="Sass"/>
            <figcaption className='app__skills-caption'>Sass</figcaption>
          </figure>
          <figure className='app__skill-wrapper'>
            <img className='app__skill-image' src={images.photoshop} alt ="Photoshop"/>
            <figcaption className='app__skills-caption'>Photoshop</figcaption>
          </figure>
          </div>
          </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about');