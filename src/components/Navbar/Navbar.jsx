import React,{useState} from 'react'
import './Navbar.modules.css';


const Navbar = () => {

  const [menuOpen,setMenuOpen]=useState(false);


  return (
    <nav className='navbar'>
        <a className='title' href="./">Portfolio</a>

        <div className='menu'>
          <img className='mentBtn'
           src={ menuOpen ? "/assets/cross.png" 
           : "/assets/burger-bar.png"} alt="menu-btn"
            onClick={()=> setMenuOpen(!menuOpen)}
           ></img>
        
        <ul className={`menuitems ${menuOpen? "menuOpen" :""}`}
          onClick={()=>setMenuOpen(false)}>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#skills' className='con'>skills</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar