import React from "react";
import "./bedrooms.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Answer from "../answer/answer";

const Bedrooms = ({ count, action, backAction }) => {
  return (
    <div className="bedrooms">
      <QuestionLayout question="How many bedrooms?" count={count} no="3" action={backAction}>
        <Answer answer="1 bedroom" action={action} />
        <Answer answer="2 bedroom" action={action} />
        <Answer answer="2 bedroom" action={action} />
        <Answer answer="+3 bedroom" action={action} />
      </QuestionLayout>
    </div>
  );
};

export default Bedrooms;
