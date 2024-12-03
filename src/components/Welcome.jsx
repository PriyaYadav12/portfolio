import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Welcome() {
  return (
    <Grid xs={6} sx={{ minWidth: '250px' }}>
      <div className="welcome">
        <div className="Title">
          <div className="titleText">
            <p>Hey there,</p>
            <p>
              I am <span className="name">Priya</span>,
            </p>
            <p>Web developer</p>
          </div>
        </div>
        {/* Social Links Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            marginTop: 2,
            position: 'relative', 
            zIndex: 1, 
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
    </Grid>
  );
}

export default Welcome;
