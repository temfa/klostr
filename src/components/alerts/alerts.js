import React from "react";
import "./alerts.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";

const Alerts = ({ type, img, question, action, backaction }) => {
  return (
    <QuestionLayout question={question} type={type} action={backaction}>
      <img src={img} alt="alert" className="alert-img" />
      <FormButton text="Next" action={action} />
    </QuestionLayout>
  );
};

export default Alerts;
