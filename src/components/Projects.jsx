import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Projects() {

  const navigate = useNavigate();
  return (
    <div className='projects' >
      <div className='Title'>
        <p className="projectText" onClick={() => navigate('/screen/project')}>Projects</p>
        <div className='projectanimation'>
          <DotLottieReact
            src="https://lottie.host/6c51d384-eda0-4bec-a84c-a89e02aedff7/ycMe5an0qJ.lottie"
            loop
            autoplay
          />
        </div>
        <p className="projectDesc">"Showcasing My Creations!" <br />
          Explore the diverse range of projects I've worked on, from full-stack applications to innovative solutions.
          Click to see how I bring ideas to life!
        </p>


      </div>

    </div>);
}

export default Projects;