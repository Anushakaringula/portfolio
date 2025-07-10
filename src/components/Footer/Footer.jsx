import React from 'react'
import './Footer.modules.css';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='foot'>
        <div className='visit'>
            <h1>Anusha's Portfolio</h1>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. </p>
            <p>Keep Rising 🚀</p>
        </div>
        <div className='links'>
            <h1>Quick Links</h1>
            <div className='linkinfo'>
                <div className='link1'>
                    <img src='/assets/next.png' alt='next'></img>
                    <a href='#home'>Home</a>
                </div>
                 <div className='link1'>
                    <img src='/assets/next.png' alt='next'></img>
                    <a href='#about'>About</a>
                </div>
                 <div className='link1'>
                    <img src='/assets/next.png' alt='next'></img>
                    <a href='#skills'>Skills</a>
                </div>
                <div className='link1'>
                    <img src='/assets/next.png' alt='next'></img>
                     <a href='#project'>Projects</a>
                </div>
                
                
                
            </div>
        </div>
        <div className='contactinfo'>
            <h1>Contact Info</h1>
            <div className='link2'>
                <img src='/assets/phone.png'></img>
                 <p>+91 9652450582</p>
            </div>
            <div className='link2'>
                <img src='/assets/mail.png'></img>
                 <p>anushakaringula@gmail.com</p>
            </div>
            <div className='link2'>
                <img src='/assets/pin.png'></img>
                 <p>Telangana,India-12345</p>
            </div>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/anusha-karingula'><img src='/assets/linkedin.png' alt='lindin' className='linkdin'></img></a>
                <a href='https://github.com/Anushakaringula'><img src='/assets/github.png' alt='git' className='git'></img></a>
                <a href="mailto:karingulaanushareddy27@gmail.com"><img src='/assets/mail.png' alt='mail' className='mail'></img></a>
            </div>
            
        </div>
       </div>
       <div className='copy'>
         <p>&copy; 2025 Anusha Karingula. All Rights Reserved.</p>
       </div>
    </footer>
    
  )
}
 <div className='copy'>
          <p>&copy; 2025 Anusha Karingula. All Rights Reserved.</p>
      </div>
export default Footer