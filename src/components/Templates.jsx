import React from 'react';
import templateImage from '../assets/templateImage.png';

function Templates() {
  return <div className='templates'>
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
  </div>;
}

export default Templates;