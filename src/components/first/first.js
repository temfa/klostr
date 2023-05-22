import React from "react";
import "./first.css";
import Home from "../../assets/home.png";
import FormButton from "../form-button/formButton";

const First = ({ action }) => {
  return (
    <div className="first-container">
      <img src={Home} alt="" />
      <h2>We’re excited to help you! Now tell us what you’re looking for</h2>
      <FormButton text="Next" action={action} />
    </div>
  );
};

export default First;
