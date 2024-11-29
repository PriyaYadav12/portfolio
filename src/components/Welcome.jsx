import React from 'react';
import linkedIn from '../assets/linkedInLogo.png';
import github from '../assets/githubLogo.png';
import email from '../assets/emailLogo.png';

function Welcome() {
  return <div className='welcome'>
    <div className='Title'>
      <div className="titleText">
        <p>Hey there,</p>
        <p>I am <span className='name'>Priya</span>,</p>
        <p>Web developer</p>
      </div>
      <div className='socialLink-div'>
        <a href="https://www.linkedin.com/in/priya-yadav-24425a14a/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="linkedInLogo" className='socialLink LinkedIn' />
        </a>
        <a href="https://github.com/PriyaYadav12" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="githubLogo" className='socialLink gitHub' />
        </a>
        <a href="mailto:priyayadav9591@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="emailLogo" className='socialLink email' />
        </a>
      </div>    
    </div>

  </div>;
}

export default Welcome;