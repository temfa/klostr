import React from "react";
import "./active.css";
import Lagos from "../../assets/lagos.jpeg";

const Active = () => {
  return (
    <div className="active-container">
      <img src={Lagos} alt="lagos" />
      <div></div>
      <h2>We are currently active in...</h2>
      <h1>Lagos, Nigeria</h1>
    </div>
  );
};

export default Active;
