import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Templates() {
  const navigate = useNavigate();

  return (
    <div className='templates'>
      <div className='Title'>
        <p className="templateText" onClick={() => navigate('/screen/template')}>Templates</p>
        <div className='projectanimation'>
          <DotLottieReact
            src="https://lottie.host/78cc36f6-12ec-4f19-9353-cdeb8cf32158/FSqMrfvoN3.lottie"
            loop
            autoplay
          />
        </div>
        <p className="projectDesc">"Creative Resources at Your Fingertips!" <br />
          Discover customizable templates designed to simplify and enhance your workflow.
          Click to find resources tailored to your needs!
        </p>

      </div>
    </div>);
}

export default Templates;