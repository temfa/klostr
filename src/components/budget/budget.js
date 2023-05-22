import React from "react";
import "./budget.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";

const Budget = ({ backAction, count, action, no, type }) => {
  return (
    <QuestionLayout question="What is your budget?" action={backAction} count={count} no={no} type={type}>
      <div className="budget-container">
        <div className="budget-start">
          <p>NGN0</p>
        </div>
        <div className="budget-end">
          <p>NGN25,000,000</p>
        </div>
      </div>
      <FormButton text="Set Budget" action={action} />
    </QuestionLayout>
  );
};

export default Budget;
