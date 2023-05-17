import React from "react";
import "./link.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";

const Link = ({ action }) => {
  return (
    <QuestionLayout type="alert" question="Show us a place you have in mind">
      <div className="link-container">
        <p>
          How it works: <br /> Post the link to a listing from ANY website, and we will find the best person for you to split the rent & bills with!
        </p>
        <div className="link-action">
          <input type="text" placeholder="http://... (paste your link here)" />
          <h3>Tip: Users who post links find a home 5x more quickly than those who don’t</h3>
          <p>Proceed without posting a link (might take longer)</p>
          <div className="link-button">
            <button onClick={action}>Proceed</button>
          </div>
        </div>
      </div>
    </QuestionLayout>
  );
};

export default Link;
