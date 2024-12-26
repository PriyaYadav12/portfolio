import React from 'react';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Welcome() {
  return (
      <div className="welcome">
        <div className="Title">
          <div className="titleText">
            <p className='myself'>My name is Priya,<br />
            I am a Web Developer <br />
            Working and Living in INDIA
            </p>
            <p className='description'>Innovative developer with a passion for creating seamless digital experiences, 
              streamlining systems, and delivering exceptional value through impactful solutions.</p>
          </div>
        </div>
        {/* Social Links Section */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            marginTop: 2,
            position: 'relative', 
            zIndex: 1, 
            marginLeft:12,
          }}
        >
          <a
            href="https://www.linkedin.com/in/priya-yadav-24425a14a/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <LinkedInIcon fontSize="large" className="icons"/>
          </a>
          <a
            href="https://github.com/PriyaYadav12"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <GitHubIcon fontSize="large" className="icons"/>
          </a>
          <a
            href="mailto:priyayadav9591@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="socialLink"
          >
            <EmailIcon fontSize="large" className="icons"/>
          </a>
        </Box>
      </div>
  );
}

export default Welcome;
