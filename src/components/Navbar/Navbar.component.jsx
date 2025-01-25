import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img
          src="/public/images/companyLogo.png" 
          alt="RegisterKaro Logo"
          className="navbar__logo-image"
        />
      </div>

      {/* Toggle Menu for Mobile */}
      <input type="checkbox" id="menu-toggle" className="navbar__toggle-checkbox" />
      <label htmlFor="menu-toggle" className="navbar__toggle-label">
        <span className="navbar__toggle-icon"></span>
      </label>

      {/* Navigation Links */}
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#about">About Us</a></li>
        {/* Search Icon */}
        <li className="navbar__search">
          <FontAwesomeIcon icon={faSearch} className="navbar__search-icon" />
        </li>
      </ul>

     
      <button className="navbar__cta">Talk An Expert</button>
    </nav>
  );
};

export default Navbar;

