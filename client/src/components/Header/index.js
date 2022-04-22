import React from 'react';
import { Link } from 'react-router-dom';
// import { Sling as Hamburger } from 'hamburger-react'



function Header() {
  // const [isOpen, setOpen] = useState(false) 
  return (
    <section className="header-section">
      <nav className="navbar navbar-expand-md">
        {/* <div className="container"> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            // aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ><Hamburger color="white" onToggle={toggled => ...} />

          </button> */}
          <div className="nav-div" id="navbarCollapse">
            <ul className="nav ">
              <Link to="/" className="">
                <li className="hvr-glow nav-item">Home</li>
              </Link>
              <Link to="/gallery" className="">
                <li className="hvr-glow nav-item">Gallery</li>
              </Link>
              <Link to="/services">
                <li className="hvr-glow nav-item">Services</li>
              </Link>
            </ul>
            {/* </div> */}
            {/* <div className="logo-div hvr-glow "> */}
            <Link to="/">
              <img
                className="logo hvr-glow img-fluid"
                src={require('../../assets/images/inverted_logo.png').default}
                alt="crossed straight razors"
              />
            </Link>
            {/* </div> */}
            {/* <div className="nav-2"> */}
            <ul className="nav navbar-nav ml-auto">
              <Link to="/about">
                <li className="hvr-glow">About</li>
              </Link>
              <Link to="/contact">
                <li className="hvr-glow nav-item">Contact</li>
              </Link>
              <Link to="/login">
                <li className="hvr-glow nav-item">Login</li>
              </Link>
              <Link to="/profile">
                <li className="hvr-glow nav-item">Profile</li>
              </Link>
            </ul>
          </div>
        {/* </div> */}
      </nav>
    </section>
  );
}

export default Header;
