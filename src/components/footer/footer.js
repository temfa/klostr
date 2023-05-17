import React from "react";
import "./footer.css";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Layout>
        <div className="footer-wrapper">
          <div className="footer-cont">
            <div className="footer-links">
              <NavLink>Community Forum</NavLink>
              <NavLink>FAQs</NavLink>
              <NavLink>Integrations</NavLink>
            </div>
            <div className="footer-links">
              <NavLink>Instagram</NavLink>
              <NavLink>Twitter</NavLink>
            </div>
          </div>
          <div className="footer-logo">
            <img src={Logo} alt="footer" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
