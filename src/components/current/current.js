import React from "react";
import "./current.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Answer from "../answer/answer";

const Current = ({ count, action, diffAction, backAction }) => {
  return (
    <QuestionLayout question="What is your current situation?" count={count} action={backAction} type="alert">
      <Answer answer="I already have a place, just looking for a flatmate" action={action} />
      <Answer answer="I need both a home and a flatmate" action={action} />
      <Answer answer="I’m only looking for only a home" action={diffAction} />
    </QuestionLayout>
  );
};

export default Current;
