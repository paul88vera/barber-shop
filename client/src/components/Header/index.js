import React from 'react';

function Header() {
  return (
    <section className="header-section">
      <div className="header">
        <h1>Header Pic Here</h1>
      </div>
      <nav className="nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Signup</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}
