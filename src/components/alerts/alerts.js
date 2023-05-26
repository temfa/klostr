import React from "react";
import "./alerts.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Alerts = ({ type, img, question, action, backaction, level2, level3 }) => {
  return (
    <QuestionLayout
      question={question}
      type={type}
      action={backaction}
      level2={level2}
      level3={level3}
      alert={true}
      nextAction={question === "The magic has begun! Now we’ll find your dream home" ? action : action}
      next={question === "The magic has begun! Now we’ll find your dream home" ? "Finish" : "Next"}>
      <img src={img} alt="alert" className="alert-img" />
    </QuestionLayout>
  );
};

export default Alerts;
