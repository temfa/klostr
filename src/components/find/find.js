import React from "react";
import "./find.css";
import Layout from "../../utils/layout/layout";
import House from "../../assets/house.png";
import Location from "../../assets/location.png";
import Meet from "../../assets/meet.png";

const Find = () => {
  return (
    <div className="find-container">
      <Layout>
        <div className="find-wrapper">
          <h2>Finding the right accommodation shouldn't be such a hassle.</h2>
          <p>Our feature-rich platform will help you find your ideal living situation.</p>
          <div className="find-cont">
            <div className="find-single">
              <div></div>
              <h2>Search for homes that fit your budget</h2>
              <p>Klostr's ever-expanding database of house listings means that you are certain to find the home that fits your rent and service charge expectations.</p>
              <img src={House} alt="meet" />
            </div>
            <div className="find-single">
              <div></div>
              <h2>Find homes and flatmates within your chosen location</h2>
              <p>Find the perfect home and flatmate that is closest to your office, gym, cinema and favorite entertainment centres.</p>
              <img src={Location} alt="meet" />
            </div>
            <div className="find-single">
              <div></div>
              <h2>Meet and chat with people with similar living preferences</h2>
              <p>
                Our intelligent algorithm suggests possible flatmates based on your indicated preferences and behavioural traits. View their social media handles and chat
                instantly.
              </p>
              <img src={Meet} alt="meet" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Find;
