import React from 'react';
import Card from 'react-bootstrap/Card';
import Default from '../assets/images/profile-default.png';

function Profile() {
  return (
    <div className="profile-page">
      <div className="sidebar">
        <div class="profile-pic">
          <img
            className=""
            src={require('../assets/images/profile-default.png')}
            alt="Jason"
          />
        </div>
        <div>First Last</div>
        <div>Personal Details?</div>
      </div>
      <div className="profile-body">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Default} />
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
