import React from 'react';
import Card from 'react-bootstrap/Card';
import Default from '../assets/images/profile-default.png';
import Button from 'react-bootstrap/Button';

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
            <Card.Title>Buzz Cut</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <a
              href="https://young-oasis-06911.herokuapp.com/login"
              target="_blank"
            >
              <Button variant="primary">Edit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Default} />
          <Card.Body>
            <Card.Title>Pomp</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <a
              href="https://young-oasis-06911.herokuapp.com/login"
              target="_blank"
            >
              <Button variant="primary">Edit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Default} />
          <Card.Body>
            <Card.Title>Biebs</Card.Title>
            <Card.Text>Details/instructions</Card.Text>
            <a
              href="https://young-oasis-06911.herokuapp.com/login"
              target="_blank"
            >
              <Button variant="primary">Edit</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
