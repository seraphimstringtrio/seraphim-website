import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/Seraphim Logo.png'
import './Navbar.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { StoreContext } from '../utils/store'

const Navbar = () => {
  const context = React.useContext(StoreContext);
  const [windowWidth, setWindowWidth] = context.windowWidth;

  // Scroll to top of page on render
  React.useEffect(() => {
    window.scroll(0, 0);
    console.log(window.innerWidth)
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
      {
        windowWidth > 700 &&
        <div id="navLinks">
          <Link to="">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/concerts">Concerts</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/music">Music</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      }
      {
        windowWidth <= 700 &&
        <DropdownButton id="menuDropdown" title="Menu">
          <Dropdown.Item href="#/">Home</Dropdown.Item>
          <Dropdown.Item href="#/aboutus">About Us</Dropdown.Item>
          <Dropdown.Item href="#/concerts">Concerts</Dropdown.Item>
          <Dropdown.Item href="#/pricing">Pricing</Dropdown.Item>
          <Dropdown.Item href="#/music">Music</Dropdown.Item>
          <Dropdown.Item href="#/contactus">Contact Us</Dropdown.Item>
        </DropdownButton>
      }
    </section>
  );
}

export default Navbar;