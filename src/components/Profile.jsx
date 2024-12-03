import React from 'react';
import girlImage from '../assets/GirlImage.png'
import Grid from '@mui/material/Grid2';


function Profile() {
  return <Grid xs={6} sx={{ minWidth: '250px' }}>
  <div className='profile' >
    <div className='profilediv'>
    <img 
      src={girlImage}
      alt = "Profile"
      className='profileImage'
      />
    </div>

  </div></Grid>;
}

export default Profile;