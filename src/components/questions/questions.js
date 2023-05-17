import React from "react";
import "./questions.css";
import Layout from "../../utils/layout/layout";

const Questions = () => {
  return (
    <div className="questions-container">
      <Layout>
        <div className="questions-cont">
          <h2>
            <span>Got questions?</span> See frequently asked questions from other users
          </h2>
          <button>FAQs</button>
        </div>
      </Layout>
    </div>
  );
};

export default Questions;
