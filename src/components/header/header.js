import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
          <NavLink to="/">Community Forum</NavLink>
          <NavLink to="/">FAQs</NavLink>
          <div className="nav-button">
            <Button text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
