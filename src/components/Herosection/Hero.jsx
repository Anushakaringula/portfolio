import React, { useEffect, useState } from 'react';
import "./Hero.modules.css";

const roles = ["Frontend Developer", "UI/UX Designer", "Web Developer"];

const Hero = () => {

 const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

     return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className='hero' id='home'>
        <div className='left'>
          <h1 className='title1'>Hii , <span>I'm Anusha</span></h1>
          <p className='description'>I enjoy blending creativity with technology to build simple, impactful digital experiences.</p>

            <div className="typing-role">
          I'm a 
              <span className="typing-inline">
                <span className="typed-text">{text}</span>
                <span className="cursor">|</span>
            </span>
        </div>
        
        
          <a href="mailto:karingulaanushareddy27@gmail.com" className='contactbtn'>Contact Me</a>
        </div>
        <img src="/assets/profile.png" alt="profilepic" className='profilepic'></img>
        <div className='topblur'></div>
        <div className='bottomblur'></div>
    </section>
  )
}

export default Hero