import React from "react";
import "./formButton.css";

const FormButton = ({ text, action }) => {
  return (
    <button className="form-button" onClick={action}>
      {text}
    </button>
  );
};

export default FormButton;
