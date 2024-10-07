import React from 'react';
import './Navbar.css'; // We'll define the styles here
import logo from '../assets/logo.png'; // Ensure the logo image is in the correct path

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="Fraud Buster Logo" />
      </div>
      
      {/* Navigation Links on the right */}
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blogs">Blogs</a>
        <a href="/contact">Contact</a>
        <a href="/api">API</a>
      </div>
    </nav>
  );
}

export default Navbar;
