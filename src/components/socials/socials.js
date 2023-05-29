import React from "react";
import "./socials.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Linkendin from "../../assets/linkdin.svg";
import Quick from "../../assets/quick-tips.svg";
import FormButton from "../form-button/formButton";

const Socials = ({ question, no, count, backAction, type, action, first }) => {
  return (
    <QuestionLayout question={question} no={no} count={count} action={backAction} type={type} first={first}>
      <div className="social-container">
        <p>
          Why?
          <br /> Our community is a professional one, and connecting your LinkedIn profile helps your potential matches to verify that you are indeed a real person.
        </p>
        <div className="connect-link">
          <p>Connect LinkedIn</p>
          <img src={Linkendin} alt="link" />
        </div>
        <div className="quick-tips">
          <img src={Quick} alt="quick" />
          <p>LinkedIn connections are most trusted by the users on our platform</p>
        </div>
        <h3>Proceed without posting a link (might take longer)</h3>
        <FormButton text="Proceed" action={action} />
      </div>
    </QuestionLayout>
  );
};

export default Socials;
