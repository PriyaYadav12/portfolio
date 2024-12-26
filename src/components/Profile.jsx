import React from 'react';
import girlProfile from '../assets/girlProfile.jpg'


function Profile() {
  return (<div className='profilediv'>
    <img 
      src={girlProfile}
      alt = "Profile"
      className='profileImage'
      />
    </div>);
}

export default Profile;