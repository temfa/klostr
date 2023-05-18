import React from "react";
import "./personal.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Personal = ({ question, type, count, no, action }) => {
  return (
    <QuestionLayout question={question} type={type} count={count} no={no}>
      <div className="form-container">
        <div className="form-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-single">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-groups">
          <div>
            <div className="form-select">
              <select name="" id="">
                <option value="">+234</option>
              </select>
            </div>
            <input type="text" placeholder="Telephone No" className="tel" />
            <input type="text" placeholder="Sex" className="sex" />
          </div>
          <p>Use your WhatsApp Telephone No, so your perfect match can reach out to you!</p>
        </div>
        <div className="form-group">
          <div>
            <select name="" id="">
              <option value="">Connect a social account</option>
            </select>
            <p>Match me with only similar people</p>
          </div>
          <div>
            <select name="" id="">
              <option value="">Professional Status</option>
            </select>
            <p>Match me with only similar people</p>
          </div>
        </div>
      </div>
    </QuestionLayout>
  );
};

export default Personal;
