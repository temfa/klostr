import React from "react";
import "./questionLayout.css";

const QuestionLayout = ({ children, count, question, no, action, type }) => {
  return (
    <div className="question-layout">
      <div className="question-layout-header">
        <p onClick={action}>Back</p>
        {type === "alert" ? null : (
          <p>
            {count} of {no}
          </p>
        )}
      </div>
      <h2 className="question">{question}</h2>
      {children}
    </div>
  );
};

export default QuestionLayout;
