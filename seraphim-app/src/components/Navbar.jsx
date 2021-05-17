import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/Seraphim Logo.png'
import './Navbar.css'

const Navbar = () => {

  // Scroll to top of page on render
  React.useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <section id="navbar">
      {/* Logo */}
      <Link to="">
        <img src={Logo} 
          id="logo" 
          alt="Seraphim String Trio Logo"
        />
      </Link>

      {/* Page links */}
      <div id="navLinks">
        <Link to="">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/concerts">Concerts</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/music">Music</Link>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </section>
  );
}

export default Navbar;