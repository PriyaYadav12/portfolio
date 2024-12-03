import React from 'react';
import project from '../assets/projectImage.png';
import Grid from '@mui/material/Grid2';

function Projects() {
  return             <Grid xs={12} sx={{ minHeight: '300px', pt: 6 }}>
<div className='projects'>
    <div className='Title'>
      <p className="projectText">Projects</p>
      <img 
      src={project}
      alt = "project"
      className='projectImage'
      />

    </div>

  </div></Grid>;
}

export default Projects;