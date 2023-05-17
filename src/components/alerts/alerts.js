import React from "react";
import "./alerts.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Alert from "../../assets/super.png";

const Alerts = () => {
  return (
    <QuestionLayout question="Super! Now help us figure out the type of person you’d like to live with" type="alert">
      <img src={Alert} alt="alert" className="alert-img" />
    </QuestionLayout>
  );
};

export default Alerts;
