import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <section className="header-section">
        <nav className="nav">
          <div className="nav-1">
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
            </ul>
          </div>
          <img
            className="logo"
            src={require('../../assets/images/logo.png')}
            alt="crossed straight razors"
          />
          <div className="nav-2">
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
