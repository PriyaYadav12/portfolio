import React from 'react';
import girlImage from '../assets/GirlImage.png'

function Profile() {
  return <div className='profile' >
    <div className='profilediv'>
    <img 
      src={girlImage}
      alt = "Profile"
      className='profileImage'
      />
    </div>

  </div>;
}

export default Profile;