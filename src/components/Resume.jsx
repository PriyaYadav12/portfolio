import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



function Resume() {
  const navigate = useNavigate();
  return (
    <div className='resume' onClick={() => navigate('/screen/resume')}>
      <div className='Title'>
        <p className="projectText">Resume</p>
        <div className='projectanimation'>
          <DotLottieReact
            src="https://lottie.host/e64c12ed-3aea-40e0-858b-0d63e59becff/b2BGLefZdZ.lottie"
            loop
            autoplay
          />
        </div>

        <p className="projectDesc">"Discover My Journey!" <br />
          Click here to explore my resume and learn more about my skills,
          experience, and the projects I've worked on. Dive into my professional story!
        </p>
      </div>

    </div>
  );
}

export default Resume;