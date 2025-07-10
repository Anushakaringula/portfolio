
import Navbar from './components/Navbar/Navbar';
import "./App.modules.css";
import Hero from './components/Herosection/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{ useEffect } from 'react';


const App = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000 ,
       mirror: true,          // animate on scroll up
    }); 
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
    
  )
}

export default App