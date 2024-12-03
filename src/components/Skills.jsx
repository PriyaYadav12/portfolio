import React from 'react';
import skillImage from '../assets/skillImage.png';
import Grid from '@mui/material/Grid2';

function Skills() {
  return <Grid xs={12} sx={{ minHeight: '300px', pt: 6 }}>
    <div className='skills'>
      <div className='Title'>
        <p className="skills-text">Skills And  </p>
        <p className="skills-text accent"> Tools</p>
      </div>
      <img
        src={skillImage}
        alt="skillImage"
        className='skillsImage'
      />
    </div></Grid>;
}

export default Skills;