import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.modules.css';

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <section className='project' id='project' data-aos="fade-up"  data-aos-mirror="true">
      <div className='phead'>
        <img src='/assets/coding.png' alt='code' />
        <h1>Projects <span>Made</span></h1>
      </div>

      <div className='pcart'>
        {[
          {
            img: 'weatherapp.png',
            title: 'Weather App',
            desc: 'Weather finding app using HTML, CSS, and JS',
            link: 'https://weather-app-two-peach-62.vercel.app/'
          },
          {
            img: 'passgen.png',
            title: 'Password Generator',
            desc: 'Random password is generated based on given requirements',
            link: 'https://password-generator-iota-rust.vercel.app/'
          },
          {
            img: 'recipeapp.png',
            title: 'Recipe App',
            desc: 'Finding the recipe using HTML,',
            link: 'https://sport-eosin-two.vercel.app/'
          }
        ].map((project, index) => (
          <div className='p1' key={index} data-aos="zoom-in" data-aos-delay={`${index * 200}`}>
            <img src={`/assets/${project.img}`} alt={project.title.toLowerCase()} />
            <h1>{project.title}</h1>
            <div className='pcon'>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
      <div className='viewmore-wrap'>
  <button className='viewmore'  onClick={() => window.open('/proj/project.html', '_blank')}>View More</button>
</div>
    </section>
  );
};

export default Project;
