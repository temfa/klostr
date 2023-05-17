import React from "react";
import "./answer.css";

const Answer = ({ answer, action }) => {
  return (
    <div className="answers" onClick={action}>
      <p>{answer}</p>
    </div>
  );
};

export default Answer;
