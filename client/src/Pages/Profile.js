import React from 'react';
import Calendly from '../components/Calendly';

import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-page">
        <div className="sidebar">
          <div class="profile-pic">
            <img
              className="img-fluid"
              src={require('../assets/images/profile-user.png')}
              alt="Jason"
            />
          </div>
          <div>First Last</div>
          <div>Personal Details?</div>
        </div>
      </div>
      <div className="profile-body">


        <div class="card">
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>

        
      </div>
      <Calendly />
    </div>
  );
}

export default Profile;
