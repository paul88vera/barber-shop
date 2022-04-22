import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="signup-section">
      <h1 className="signup-heading">Sign Up!</h1>
        <form onSubmit={handleFormSubmit} action="" method="get" className="signup-form">
          <div>
            <label className="signup-label" htmlFor="username">
              Enter your name:
            </label>
            <input type="username" name="username" id="username"  value={formState.username} onChange={handleChange}/>
          </div>
          <div className="">
            <label className="signup-label" htmlFor="email">
              Enter your email:
            </label>
            <input type="email" name="email" id="email"  value={formState.email} onChange={handleChange} />
          </div>
          <div className="">
            <label className="signup-label" htmlFor="password">
              Create a Password:
            </label>
            <input type="password" name="password" id="password" value={formState.password} onChange={handleChange} />
          </div>
          <div className="submit-btn-div">
            <input className="submit-btn" type="submit" value="Submit!" />
          </div>
        </form>
        {error && <div>Signup failed! Username or email may already exist.</div>}
    </section>
  );
}

export default Signup;
