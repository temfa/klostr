import React from "react";
import "./where.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Where = ({ count, action, type, question, no, backAction }) => {
  return (
    <QuestionLayout count={count} type={type} question={question} no={no} action={backAction}>
      <div className="where-container">
        <input type="text" placeholder="Tell us!" />
        <button onClick={action}>Next</button>
      </div>
    </QuestionLayout>
  );
};

export default Where;
