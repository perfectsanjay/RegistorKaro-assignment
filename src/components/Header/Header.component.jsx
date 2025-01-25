import React from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="info">
        <div>
          <FaEnvelope />
          <span>www.registerkaro.in</span>
        </div>
        <div>
          <FaPhone />
          <span>+918447746183</span>
        </div>
      </div>
      <div className="social-icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
};

export default Header;
