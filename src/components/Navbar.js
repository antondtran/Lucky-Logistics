import React from 'react';
import './Navbar.css'; // CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Lucky Logistics</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
