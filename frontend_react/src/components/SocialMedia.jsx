import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
    return (
        
        <div className='app__social'>
            <div>
                <a href="https://github.com/juusorutanen" target="_blank" rel="noopener noreferrer">
                <BsGithub />
                </a>
            </div>
            <div>
            <a href="https://www.instagram.com/juusoruta" target="_blank" rel="noopener noreferrer">
             <BsInstagram />
             </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/juusorutanen/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
                </a>
            </div>
            <span className='app__vertical-line-left'></span>
        </div>
       
        
        
        
    )
}

export default SocialMedia;