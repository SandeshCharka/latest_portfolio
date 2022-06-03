import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div 
      onClick={() => window.open('https://github.com/SandeshCharka')} 
      style={{ cursor: 'pointer' }}>
        <BsGithub />
      </div>
      <div
        onClick={() => window.open('https://www.linkedin.com/in/sandesh-charka-8354411a9/')}
        style={{ cursor: 'pointer' }}
      >
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
