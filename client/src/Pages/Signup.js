import React from 'react';

const Signup = () => {
  return (
    <section className="signup-section">
      <h1 className="signup-heading">Sign Up!</h1>
      <div className="">
        <form action="" method="get" className="signup-form">
          <div>
            <label className="signup-label" for="name">
              Enter your name:
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="">
            <label className="signup-label" for="email">
              Enter your email:
            </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="">
            <label className="signup-label" for="password">
              Create a Password
            </label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="submit-btn-div">
            <input className="submit-btn" type="submit" value="Submit!" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
