import React from 'react';
import resumeImage from '../assets/resumeGif.gif';
import Grid from '@mui/material/Grid2';


function Resume() {
  return <Grid xs={12} sx={{ minHeight: '300px' }}>
    <div className='resume'>
      <div className='Title'>
        <p className="projectText">Resume</p>
        <img
          src={resumeImage}
          alt="resumeImage"
          className='resumeImage'
        />
      </div>

    </div>
  </Grid>;
}

export default Resume;