import React, { useState } from "react";
import "./started.css";
import Budget from "../budget/budget";
import Logo from "../../assets/logo-white.svg";
import Alerts from "../alerts/alerts";
import Where from "../where/where";
import Alert from "../../assets/super.png";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Answer from "../answer/answer";
import Personal from "../personal/personal";
import { useNavigate } from "react-router";
import Link from "../link/link";
import First from "../first/first";
import Socials from "../socials/socials";

const Started = () => {
  const data = [
    {
      questions: "We’re excited to help you! Now tell us what you’re looking for",
      multiStep: false,
      alert: true,
    },
    {
      questions: "Personal Information",
      multiStep: true,
      alert: false,
      current: 1,
      total: 2,
    },
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
      questions: "Connect a social account",
      multiStep: true,
      alert: false,
      current: 2,
      total: 2,
    },
    {
      questions: "The magic has begun! Now we’ll find your dream home",
      multiStep: false,
      alert: true,
      img: Alert,
    },
  ];
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const remove = () => {
    setCount(count - 1);
  };
  const loadForm = () => {
    switch (data[count].alert) {
      case true:
        return count === 0 ? (
          <First action={add} />
        ) : (
          <Alerts type={data[count].multiStep} img={data[count].img} question={data[count].questions} action={add} backaction={remove} />
        );
      case false:
        switch (data[count].questions) {
          case "Show us a place you have in mind":
            return <Link action={add} type={data[count].multiStep} question={data[count].questions} backAction={remove} />;
          case "Where do you want to live?":
            return <Where action={add} type={data[count].multiStep} question={data[count].questions} count={data[count].current} no={data[count].total} backAction={remove} />;
          case "What is your budget?":
            return <Budget action={add} type={data[count].multiStep} count={data[count].current} no={data[count].total} backAction={remove} />;
          case "Personal Information":
            return <Personal action={add} type={data[count].multiStep} count={data[count].current} no={data[count].total} backAction={remove} />;
          case "Connect a social account":
            return <Socials action={add} type={data[count].multiStep} count={data[count].current} no={data[count].total} backAction={remove} question={data[count].questions} />;
          default:
            return (
              <QuestionLayout question={data[count].questions} type={data[count].multiStep} count={data[count].current} no={data[count].total} action={remove}>
                {data[count].answer?.map((item, index) => {
                  return <Answer answer={item} key={index} action={add} />;
                })}
              </QuestionLayout>
            );
        }

      default:
        return (
          <QuestionLayout question={data[count].questions} type={data[count].multiStep} count={data[count].current} no={data[count].total}>
            {data[count].answer?.map((item, index) => {
              return <Answer answer={item} key={index} action={add} />;
            })}
          </QuestionLayout>
        );
    }
  };
  return (
    <>
      <div className="get-started-header">
        <div className="get-started-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="get-started-action">
          {count !== 0 ? (
            <p
              onClick={() => {
                setCount(0);
              }}>
              Start Over
            </p>
          ) : null}
          <p
            onClick={() => {
              navigate("/");
            }}>
            Exit
          </p>
        </div>
      </div>
      <div className="get-started-body">{loadForm()}</div>
    </>
  );
};

export default Started;
