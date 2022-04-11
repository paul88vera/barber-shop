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
              {/* <Link to="/signup">
                <li>Signup</li>
              </Link> */}
            </ul>
          </div>
        </nav>
      </section>
      <div className="signup-hero">
        <div className="hero-text">
          {/* <img
          className="hero"
          src={require('../../assets/images/landing-page.jpg')}
          alt="vintage shaving tools"
        /> */}
          <p className="promo">Sign Up for 50% OFF your first cut!</p>
          <p>
            Cosby sweater iphone artisan, squid trust fund photo booth twee blog
            shoreditch single-origin coffee aesthetic jean shorts messenger bag
            brooklyn butcher. Iphone fap banksy next level put a bird on it,
            letterpress photo booth thundercats biodiesel fanny pack etsy banh
            mi wayfarers. Sustainable four loko dreamcatcher, vegan
            single-origin coffee yr cardigan biodiesel williamsburg thundercats
            salvia master cleanse terry richardson tumblr mcsweeney’s.
          </p>
          <button id="signup-btn" className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
