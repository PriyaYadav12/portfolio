import React from 'react';
import skillImage from '../assets/skillImage.png'
function Skills() {
  return <div className='skills'>
    <div className='Title'>
      <p className="skills-text">Skills And  </p>
      <p className="skills-text accent"> Tools</p>
    </div>
    <img 
        src= {skillImage}
        alt="skillImage"
        className='skillsImage'
      />
  </div>;
}

export default Skills;