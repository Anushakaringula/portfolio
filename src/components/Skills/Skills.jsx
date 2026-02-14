import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.modules.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <section className='skills' id='skills' data-aos="fade-up" data-aos-mirror="true">
      <h1 className="abilities"> Skills & <span> Abilities</span></h1>
      <div className='set'>
        {[
          { src: 'react.png', label: 'React' },
          { src: 'figma.png', label: 'Figma' },
          { src: 'php.png', label: 'PHP' },
          { src: 'html.png', label: 'Html' },
          { src: 'css.png', label: 'Css' },
          { src: 'js.png', label: 'JavaScript' },
          { src: 'java.png', label: 'Java' },
          { src: 'mysql.png', label: 'MySQL' },
          { src: 'letter-c.png', label: 'C' },
          { src: 'github.png', label: 'Git Hub', extraClass: 'git' },
          { src: 'springboot.png', label: 'Springboot',id:'boot'},
        ].map((skill, index) => (
          <div className='set1' key={index} data-aos="zoom-in">
            <img
              src={`/assets/${skill.src}`}
              alt={skill.label.toLowerCase()}
              className={skill.extraClass || ''}
            />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
