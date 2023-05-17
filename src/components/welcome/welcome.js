import React from "react";
import "./welcome.css";
import Layout from "../../utils/layout/layout";
import Button from "../button/button";
import WelcomeImg from "../../assets/community.jpeg";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Layout>
        <div className="welcome-wrapper">
          <div className="welcome-text">
            <h2>The best way to find your next home</h2>
            <h3>Connect with verified home-seekers & estate agents</h3>
            <p>
              Thousands of people just like you are looking for their next home and flatmate. Get started to find a home, find a flatmate, and find your dream living conditions.
            </p>
            <NavLink to="get-started">
              <Button text="Get Started" />
            </NavLink>
          </div>
          <div className="welcome-img">
            <img src={WelcomeImg} alt="Welcome" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Welcome;
