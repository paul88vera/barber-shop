import React from 'react';

function Login() {
  return (
    <section className="login-page">
      <h1 className="login-title">Welcome, please log in</h1>
      <div className="login">
        <form action="" method="get" className="login-form">
          <div>
            <label className="login-label" for="name">
              Username:
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="">
            <label className="login-label" for="password">
              Password:
            </label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="login-btn-div">
            <input className="login-btn" type="submit" value="Login!" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
