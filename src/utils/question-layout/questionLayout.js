import React from "react";
import "./questionLayout.css";

const QuestionLayout = ({ children, count, question, no, action, type, level2, level3, nextAction, alert, next, indicator, first }) => {
  return (
    <div className="question-layout">
      <div className="indicator">
        {indicator ? null : (
          <>
            <div className="indicator-one">
              <div className="indicator-active">
                <p>1</p>
              </div>
              <h2 className="text-active">Personal Details</h2>
            </div>
            <div className="indicator-one">
              <div className={level2 ? "indicator-active" : ""}>
                <p>2</p>
              </div>
              <h2 className={level2 ? "text-active" : ""}>Living Preferences</h2>
            </div>
            <div className="indicator-one">
              <div className={level3 ? "indicator-active" : ""}>
                <p>3</p>
              </div>
              <h2 className={level3 ? "text-active" : ""}>Social Preferences</h2>
            </div>
          </>
        )}
      </div>
      <div className="question-layout-header">
        <div>{first ? null : <p onClick={action}>Back</p>}</div>
        {alert ? (
          <p onClick={nextAction} className="next-button">
            {next}
          </p>
        ) : type === false ? null : (
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
