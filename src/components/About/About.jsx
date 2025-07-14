import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './About.modules.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <section className='about' id='about' data-aos="fade-up" data-aos-mirror="true">
      <div className='head'>
        <img src="/assets/about.png" alt="About section banner" className='aboutpic' />
        <h2 className='abt'>About <span className='me'>Me</span></h2>
      </div>

      <div className='mid'>
        <img
          className='side1'
          src='/assets/about.jpg'
          alt='Anusha profile'
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <div className='side2' data-aos="fade-left" data-aos-delay="200">
          <h1>I'm Anusha</h1>
          <h3>Frontend Developer</h3>
          <p className='info'>
           I am a passionate undergraduate from RGUKT Basar, pursuing a B.Tech in Computer Science and Engineering. I enjoy blending creativity with technology to craft engaging digital experiences. My interests lie in UI/UX design, full-stack development, and AI/ML. I’ve worked on responsive web applications and intuitive user interfaces using technologies like Java, PHP, MySQL, HTML, CSS, JavaScript, and design tools like Figma.          </p>
          <p className='spam'><span>Email: </span>karingulaanushareddy27@gmail.com</p>
          <p className='spam'><span>Place: </span>Siddipet, Telangana</p>
          <a
            href="/assets/Karingula Anusha resume.pdf"
            className='resume'
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
