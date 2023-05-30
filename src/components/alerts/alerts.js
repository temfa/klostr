import React from "react";
import "./alerts.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import { useNavigate } from "react-router";

const Alerts = ({ type, img, question, action, backaction, level2, level3, first, question2 }) => {
  const navigate = useNavigate();
  return (
    <QuestionLayout
      question={question}
      question2={question2}
      type={type}
      action={backaction}
      level2={level2}
      level3={level3}
      first={first}
      alert={true}
      indicator={true}
      nextAction={
        question === "The magic has begun! Now we’ll find your dream home"
          ? () => {
              navigate("/");
            }
          : action
      }
      next={question === "The magic has begun! Now we’ll find your dream home" ? "Finish" : "Next"}>
      <img src={img} alt="alert" className="alert-img" />
    </QuestionLayout>
  );
};

export default Alerts;
