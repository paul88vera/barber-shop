import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="">
      <section className="header-section">
        <nav className="nav">
          <div className="nav-1">
            <ul>
              <Link to="/">
                <li className="hvr-glow">Home</li>
              </Link>
              <Link to="/gallery">
                <li className="hvr-glow">Gallery</li>
              </Link>
              <Link to="/services">
                <li className="hvr-glow">Services</li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <img
              className="logo hvr-glow"
              src={require('../../assets/images/inverted_logo.png')}
              alt="crossed straight razors"
            />
          </Link>
          <div className="nav-2">
            <ul>
              <Link to="/about">
                <li className="hvr-glow">About</li>
              </Link>
              <Link to="/contact">
                <li className="hvr-glow">Contact</li>
              </Link>
              <Link to="/login">
                <li className="hvr-glow">Login</li>
              </Link>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
