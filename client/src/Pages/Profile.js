import React from 'react';
import Calendly from '../components/Calendly';
import Card from 'react-bootstrap/Card';
import Default from '../assets/images/profile-default.png';
import Button from 'react-bootstrap/Button';

function Profile() {
  return (
    <div className="profile-wrapper">
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
      </div>
      <div className="profile-body">
        {/* <Card classname="card-row" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Buzz Cut</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <Button variant="primary">Edit</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Pomp</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <Button variant="primary">Edit</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Biebs</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <Button variant="primary">Edit</Button>
          </Card.Body>
        </Card> */}

        <div class="card">
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
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
