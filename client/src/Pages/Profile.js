import React, { useState } from 'react';
import Calendly from '../components/Calendly';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_HAIRCUT } from '../utils/mutations';
import auth from '../utils/auth';

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  // const loggedIn = Auth.loggedIn();
  const [formState, setFormState] = useState({
    haircutText: '',
    instructions: '',
  });
  const [addHaircut, { e }] = useMutation(ADD_HAIRCUT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addHaircut({
        variables: { ...formState },
      });
    } catch (e) {
      console.log(e);
    }

    setFormState({
      haircutText: '',
      instructions: '',
    });

    window.location.reload();
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.log(error);
    return <div>Error!</div>;
  } else {
    const user = data.me;
    console.log(user);
    console.log(user.haircuts);
    const haircuts = user.haircuts;

    return (
      <div className="profile-wrapper">
        <div className="profile-page">
          <div className="sidebar">
            <div className="profile-pic">
              {/* {loggedIn && ( */}
              <img
                className="img-fluid"
                src={require('../assets/images/profile-user.png').default}
                alt="User"
              />
              {/* )} */}
            </div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
          <form onSubmit={handleFormSubmit} className="enter-haircut">
            <label htmlFor="haircutText">Enter New Haircut:</label>
            <input
              class="profile-input"
              type="text"
              id="haircutText"
              name="haircutText"
              value={formState.haircutText}
              onChange={handleChange}
            ></input>
            <br></br>
            <label htmlFor="instructions">Enter special instructions:</label>
            <input
              class="profile-input-int"
              type="text"
              id="instructions"
              name="instructions"
              value={formState.instructions}
              onChange={handleChange}
            ></input>
            <button type="submit" className="save-btn">
              Save Haircut
            </button>
          </form>
        </div>
        <div className="profile-body">
          {haircuts ? (
            haircuts.map((haircut) => (
              <div key={haircut._id} className="card">
                <div className="container">
                  <h4>
                    <b>Haircut: {haircut.haircutText}</b>
                  </h4>
                  <p>Special Instructions: {haircut.instructions}</p>
                  <button type="button" className="delete-btn">
                    Delete Haircut
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card">
              <div className="container">
                <h4>
                  <b>No Haircuts Yet</b>
                </h4>
                <p>No Special Instructions</p>
              </div>
            </div>
          )}
        </div>
        <Calendly />
      </div>
    );
  }
};

export default Profile;
