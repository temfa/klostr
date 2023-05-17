import React from "react";
import "./where.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Where = ({ count, action }) => {
  return (
    <QuestionLayout count={count} no="3" question="Where do you want to live?">
      <div className="where-container">
        <input type="text" placeholder="Tell us!" />
        <button onClick={action}>Next</button>
      </div>
    </QuestionLayout>
  );
};

export default Where;
