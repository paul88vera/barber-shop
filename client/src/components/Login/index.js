import React from 'react';

function Login() {
  return (
    <section className="login-page">
      <h1 className="login-title">Welcome, Please Log in</h1>
      <div className="login">
        <form className="login-form">
          <div>
            <label className="login-label">Username</label>
            <input type="email" id="email" required placeholder="Enter your email" />
          </div>
          <div>
            <label className="login-label">Password</label>
            <input type="password" id="password" required placeholder="Enter your password" />
          </div>
          <div className="submit-btn-div">
            <input className="submit-btn" type="submit" value="Submit!" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;