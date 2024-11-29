import React from 'react';
import resumeImage from '../assets/resumeGif.gif';

function Resume() {
  return <div className='resume'>
    <div className='Title'>
      <p className="projectText">Resume</p>
      <img 
        src= {resumeImage}
        alt="resumeImage"
        className='resumeImage'
      />
    </div>

  </div>;
}

export default Resume;