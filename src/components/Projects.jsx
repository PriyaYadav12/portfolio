import React from 'react';
import project from '../assets/projectImage.png';

function Projects() {
  return <div className='projects'>
    <div className='Title'>
      <p className="projectText">Projects</p>
      <img 
      src={project}
      alt = "project"
      className='projectImage'
      />

    </div>

  </div>;
}

export default Projects;