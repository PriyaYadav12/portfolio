import React from 'react';
import templateImage from '../assets/templateImage.png';
import Grid from '@mui/material/Grid2';

function Templates() {
  return             <Grid xs={12} sx={{ minHeight: '100%', pt: 5 }}>
<div className='templates'>
    <div className='Title'>
      <p className="templateText">Templates</p>
      <div className="template-images">
        {Array.from({ length: 4 }, (_, index) => (
          <img 
            key={index}
            src={templateImage}
            alt='templateImage'
            className='templateImage'
          />
        ))}
      </div>
    </div>
  </div></Grid>;
}

export default Templates;