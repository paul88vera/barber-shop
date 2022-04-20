import React from 'react';
import Calendly from '../components/Calendly';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  const { loading, error, data } = useQuery(QUERY_USERS);

  if (loading) {
    return ( <div>Loading...</div>)
  } else if (error) {
    console.log(error);
    return ( <div>Error!</div>)
  } else {
    const users = data.users;
    console.log(users);
    console.log(users[2].haircuts)
    const haircuts = users[2].haircuts;

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
            <div>{users[2].username}</div>
            <div>{users[2].email}</div>
          </div>
          <form className="enter-haircut">
            <label for="haircut">Enter New Haircut:</label>
            <input type="text" id="haircut-input" name="haircut-input"></input><br></br>
            <label for="instructions">Enter special instructions:</label>
            <input type="text" id="instruction-input" name="instructions-input"></input>
          </form>
        </div>
        <div className="profile-body">
          { haircuts ? haircuts.map( haircut => (
            <div key={haircut._id} className="card">
              <div className="container">
                <h4>
                  <b>Haircut: {haircut.haircutText}</b>
                </h4>
                <p>Special Instructions: {haircut.instructions}</p>
                <button type="button" className="delete-btn">Delete Haircut</button>
              </div>
            </div>
          )) 
          : <div className="card">
            <div className="container">
              <h4>
                <b>No Haircuts Yet</b>
              </h4>
              <p>No Special Instructions</p>
            </div>
          </div>}
        </div>
        <Calendly />
      </div>
    );
  }
}

export default Profile;
