import React from 'react';
import './skills.css';

function Skillcard({skill}) {
  return (
    <>
    
    <div className="skill-card">
        <div className="skill-icon">{skill.icon}</div>
        <label htmlFor="" className="skill-name">{skill.name}</label>
    </div>
    
    </>
  )
}

export default Skillcard;