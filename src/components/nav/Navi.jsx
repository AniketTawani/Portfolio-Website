import React from 'react'
import './nav.css';
import {SiHomeassistant} from 'react-icons/si';
import {FaUserAstronaut} from 'react-icons/fa';
import {GiTechnoHeart} from 'react-icons/gi';
import {GoProject} from 'react-icons/go';
import {MdContactMail} from 'react-icons/md';
import {useState} from 'react';

function Navi() {
    const [activeNav,setActiveNav] = useState('#');
  return (
     <>
     <nav>
        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}><SiHomeassistant/><div className='tooltip'>Home</div></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaUserAstronaut/><div className='tooltip'>About</div></a>
        <a href="#tech" onClick={()=> setActiveNav('#tech')} className={activeNav==='#tech' ? 'active' : ''}><GiTechnoHeart/><div className='tooltip'>Tech</div></a>
        <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><GoProject/><div className='tooltip'>Projects</div></a>
        <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><MdContactMail/><div className='tooltip'>Contact</div></a>
     </nav>
     </>
  )
}

export default Navi