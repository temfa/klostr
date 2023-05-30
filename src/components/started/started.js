import React, { useEffect, useState } from "react";
import "./started.css";
import Budget from "../budget/budget";
import Logo from "../../assets/logo-white.svg";
import Alerts from "../alerts/alerts";
import Where from "../where/where";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import Answer from "../answer/answer";
import Personal from "../personal/personal";
import { useNavigate } from "react-router";
import Link from "../link/link";
import Socials from "../socials/socials";
import axios from "axios";
// import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../../utils/data";

const Started = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [level2, setlevel2] = useState(false);
  const [level3, setlevel3] = useState(false);
  const [first, setFirst] = useState(false);
  const [type, setType] = useState("");
  // const [loading, setLoading] = useState(false);
  let token;
  let tokenData;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
    if (token !== "undefined") {
      tokenData = token;
    }
  }
  const add = () => {
    setCount(count + 1);
  };
  const remove = () => {
    setCount(count - 1);
  };
  const loadForm = () => {
    switch (data(type)[count].alert) {
      case true:
        return (
          <Alerts
            type={data(type)[count].multiStep}
            img={data(type)[count].img}
            question={data(type)[count].questions}
            question2={data(type)[count].question2}
            action={add}
            backaction={remove}
            level2={level2}
            level3={level3}
            first={first}
          />
        );
      case false:
        switch (data(type)[count].questions) {
          case "Show us a place you have in mind":
            return (
              <Link
                action={() => {
                  setCount(count + 2);
                }}
                type={data(type)[count].multiStep}
                question={data(type)[count].questions}
                backAction={remove}
                count={data(type)[count].current}
                no={data(type)[count].total}
                level2={level2}
                first={first}
              />
            );
          case "Where do you want to live?":
            return (
              <Where
                action={add}
                type={data(type)[count].multiStep}
                question={data(type)[count].questions}
                count={data(type)[count].current}
                no={data(type)[count].total}
                backAction={remove}
                level2={level2}
                first={first}
              />
            );
          case "What is your budget?":
            return (
              <Budget
                action={add}
                type={data(type)[count].multiStep}
                count={data(type)[count].current}
                no={data(type)[count].total}
                backAction={remove}
                level2={level2}
                first={first}
              />
            );
          case "Personal Information":
            return <Personal action={add} type={data(type)[count].multiStep} count={data(type)[count].current} no={data(type)[count].total} backAction={remove} first={first} />;
          case "Connect a social account":
            return (
              <Socials
                action={add}
                type={data(type)[count].multiStep}
                count={data(type)[count].current}
                no={data(type)[count].total}
                backAction={remove}
                question={data(type)[count].questions}
                first={first}
              />
            );
          default:
            return (
              <QuestionLayout
                question={data(type)[count].questions}
                type={data(type)[count].multiStep}
                count={data(type)[count].current}
                no={data(type)[count].total}
                action={remove}
                indicator={data(type)[count].indicator}
                first={first}
                level2={level2}
                level3={level3}>
                {data(type)[count].answer?.map((item, index) => {
                  return (
                    <Answer
                      answer={item.name}
                      key={index}
                      action={async (e) => {
                        if (data(type)[count].questions === "How do we split the bills?") {
                          add();
                        } else if (data(type)[count].questions === "Can you live with pets?") {
                          add();
                        } else {
                          const config = {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${tokenData}`,
                            },
                          };
                          const url = "https://dev.api.klostr.com/user/update-user-preference";
                          const dataCont = {
                            key: data(type)[count].slug,
                            value: data(type)[count].answer[index].slug,
                          };
                          try {
                            await axios.patch(url, dataCont, config).then((response) => {
                              if (response.data.status === 200) {
                                if (data(type)[count].answer[index].name === "I already have a place, just looking for a flatmate") {
                                  setType("first");
                                } else {
                                  setType("");
                                }
                                add();
                              }
                            });
                          } catch (error) {
                            toast.error(error?.response?.data?.message);
                          }
                        }
                      }}
                    />
                  );
                })}
              </QuestionLayout>
            );
        }

      default:
        return (
          <QuestionLayout
            question={data(type)[count].questions}
            type={data(type)[count].multiStep}
            count={data(type)[count].current}
            no={data(type)[count].total}
            level2={level2}
            level3={level3}
            first={first}>
            {data(type)[count].answer?.map((item, index) => {
              return <Answer answer={item} key={index} action={add} />;
            })}
          </QuestionLayout>
        );
    }
  };

  useEffect(() => {
    if (count === 0) {
      setFirst(true);
    } else {
      setFirst(false);
    }
    if (count >= 3) {
      setlevel2(true);
    } else {
      setlevel2(false);
    }
    if (count >= 8) {
      setlevel3(true);
    } else {
      setlevel3(false);
    }
  }, [count]);
  return (
    <>
      <ToastContainer />
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
