import React, { useState } from "react";
import "./started.css";
import Current from "../current/current";
import Bedrooms from "../bedrooms/bedrooms";
import Budget from "../budget/budget";
import Link from "../link/link";
import Logo from "../../assets/logo-white.png";
import Where from "../where/where";
import Alerts from "../alerts/alerts";
import Alert from "../../assets/super.png";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Answer from "../answer/answer";
import Personal from "../personal/personal";

const Started = () => {
  const data = [
    {
      questions: "What is your current situation?",
      answer: ["I already have a place, just looking for a flatmate", "I need both a home and a flatmate", "I’m only looking for only a home"],
      multiStep: false,
      alert: false,
    },
    {
      questions: "Show us a place you have in mind",
      multiStep: false,
      alert: false,
    },
    {
      questions: "Where do you want to live?",
      answer: ["I already have a place, just looking for a flatmate", "I need both a home and a flatmate", "I’m only looking for only a home"],
      multiStep: true,
      current: 1,
      total: 3,
      alert: false,
    },
    {
      questions: "How many bedrooms?",
      answer: ["1 bedroom", "2 bedroom", "3 bedroom", "+ 3 bedroom"],
      multiStep: true,
      current: 2,
      total: 3,
      alert: false,
    },
    {
      questions: "What is your budget?",
      multiStep: true,
      current: 3,
      total: 3,
      alert: false,
    },
    {
      questions: "Super! Now help us figure out the type of person you’d like to live with",
      multiStep: false,
      alert: true,
      img: Alert,
    },
    {
      questions: "Who can you live with?",
      answer: ["Male only", "Female only", "Both male and female"],
      multiStep: true,
      current: 1,
      total: 5,
      alert: false,
    },
    {
      questions: "What’s your opinion on chores?",
      answer: ["Let’s hire someone to clean", "We can clean on the weekends", "Clean up immediately!"],
      multiStep: true,
      current: 2,
      total: 5,
      alert: false,
    },
    {
      questions: "Can you live with pets?",
      answer: ["Dogs only", "Cats only", "All animals welcome", "Heck no!!!"],
      multiStep: true,
      current: 3,
      total: 5,
      alert: false,
    },
    {
      questions: "How often can we have friends/family over?",
      answer: ["Weekends are fine", "Everyday", "Never. That’s what bars are for"],
      multiStep: true,
      current: 4,
      total: 5,
      alert: false,
    },
    {
      questions: "How do we split the bills?",
      answer: ["You take care of some things, I take care of others", "We split every bill halfway"],
      multiStep: true,
      current: 5,
      total: 5,
      alert: false,
    },
    {
      questions: "Fantastic! We’ve got what we need Now to the final, most important details.",
      multiStep: false,
      alert: true,
      img: Alert,
    },
    {
      questions: "Personal Information",
      multiStep: true,
      alert: false,
      current: 1,
      total: 2,
    },
    {
      questions: "Connect a social account",
      multiStep: true,
      alert: false,
      current: 2,
      total: 2,
    },
  ];
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const loadForm = () => {
    switch (data[count].alert) {
      case true:
        return <Alerts type={data[count].multiStep} img={data[count].img} question={data[count].questions} action={add} />;
        break;
      case false:
        switch (data[count].questions) {
          case "Show us a place you have in mind":
            return <Where action={add} type={data[count].multiStep} />;
            break;
          case "What is your budget?":
            return <Budget action={add} type={data[count].multiStep} count={data[count].current} no={data[count].total} />;
            break;
          case "Personal Information":
            return <Personal action={add} type={data[count].multiStep} count={data[count].current} no={data[count].total} />;
            break;
          default:
            return (
              <QuestionLayout question={data[count].questions} type={data[count].multiStep} count={data[count].current} no={data[count].total}>
                {data[count].answer?.map((item, index) => {
                  return <Answer answer={item} key={index} action={add} />;
                })}
              </QuestionLayout>
            );
            break;
        }

        break;
      default:
        return (
          <QuestionLayout question={data[count].questions} type={data[count].multiStep} count={data[count].current} no={data[count].total}>
            {data[count].answer?.map((item, index) => {
              return <Answer answer={item} key={index} action={add} />;
            })}
          </QuestionLayout>
        );
        break;
    }
  };
  return (
    <>
      <div className="get-started-header">
        <div className="get-started-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="get-started-action">
          {count !== 0 ? <p>Start Over</p> : null}
          <p>Exit</p>
        </div>
      </div>
      <div className="get-started-body">{loadForm()}</div>
    </>
  );
};

export default Started;
