import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ 
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: ''
    })
  }


  return (
    <section className="login-page">
      <h1 className="login-title">Welcome, please log in</h1>
      <div className="login">
        <form onSubmit={handleFormSubmit} action="" method="get" className="login-form">
          <div>
            <label className="login-label" for="username">
              Username:
            </label>
            <input type="username" name="username" id="username" value={formState.username} onChange={handleChange} />
          </div>
          <div className="">
            <label className="login-label" for="password">
              Password:
            </label>
            <input type="password" name="password" id="password" value={formState.password} onChange={handleChange} />
          </div>
          <div className="login-btn-div">
            <input className="login-btn" type="submit" value="Login" />
          </div>
        </form>
        {error && <div>Invalid credentials.</div>}
      </div>
    </section>
  );
}

export default Login;
