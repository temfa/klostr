import React from "react";
import "./alerts.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Alerts = ({ type, img, question, action }) => {
  return (
    <QuestionLayout question={question} type={type}>
      <img src={img} alt="alert" className="alert-img" />
      <button className="alert-button" onClick={action}>
        Next
      </button>
    </QuestionLayout>
  );
};

export default Alerts;
