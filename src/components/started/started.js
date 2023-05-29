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
import { Data } from "../../utils/data";
import axios from "axios";
// import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Started = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [level2, setlevel2] = useState(false);
  const [level3, setlevel3] = useState(false);
  const [first, setFirst] = useState(false);
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
    switch (Data[count].alert) {
      case true:
        return (
          <Alerts
            type={Data[count].multiStep}
            img={Data[count].img}
            question={Data[count].questions}
            action={add}
            backaction={remove}
            level2={level2}
            level3={level3}
            first={first}
          />
        );
      case false:
        switch (Data[count].questions) {
          case "Show us a place you have in mind":
            return (
              <Link
                action={add}
                type={Data[count].multiStep}
                question={Data[count].questions}
                backAction={remove}
                count={Data[count].current}
                no={Data[count].total}
                level2={level2}
                first={first}
              />
            );
          case "Where do you want to live?":
            return (
              <Where
                action={add}
                type={Data[count].multiStep}
                question={Data[count].questions}
                count={Data[count].current}
                no={Data[count].total}
                backAction={remove}
                level2={level2}
                first={first}
              />
            );
          case "What is your budget?":
            return <Budget action={add} type={Data[count].multiStep} count={Data[count].current} no={Data[count].total} backAction={remove} level2={level2} first={first} />;
          case "Personal Information":
            return <Personal action={add} type={Data[count].multiStep} count={Data[count].current} no={Data[count].total} backAction={remove} first={first} />;
          case "Connect a social account":
            return (
              <Socials
                action={add}
                type={Data[count].multiStep}
                count={Data[count].current}
                no={Data[count].total}
                backAction={remove}
                question={Data[count].questions}
                first={first}
              />
            );
          default:
            return (
              <QuestionLayout
                question={Data[count].questions}
                type={Data[count].multiStep}
                count={Data[count].current}
                no={Data[count].total}
                action={remove}
                indicator={Data[count].indicator}
                first={first}
                level2={level2}
                level3={level3}>
                {Data[count].answer?.map((item, index) => {
                  return (
                    <Answer
                      answer={item.name}
                      key={index}
                      action={async (e) => {
                        if (Data[count].questions === "How do we split the bills?") {
                          add();
                        } else if (Data[count].questions === "Can you live with pets?") {
                          add();
                        } else {
                          const config = {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${tokenData}`,
                            },
                          };
                          const url = "https://dev.api.klostr.com/user/update-user-preference";
                          const data = {
                            key: Data[count].slug,
                            value: Data[count].answer[index].slug,
                          };
                          try {
                            await axios.patch(url, data, config).then((response) => {
                              if (response.data.status === 200) {
                                add();
                              }
                            });
                          } catch (error) {
                            toast.error(error.response.data.message);
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
            question={Data[count].questions}
            type={Data[count].multiStep}
            count={Data[count].current}
            no={Data[count].total}
            level2={level2}
            level3={level3}
            first={first}>
            {Data[count].answer?.map((item, index) => {
              return <Answer answer={item} key={index} action={add} />;
            })}
          </QuestionLayout>
        );
    }
  };

  useEffect(() => {
    if (count === 0) {
      setFirst(true);
    }
    if (count >= 5) {
      setlevel2(true);
    } else {
      setlevel2(false);
    }
    if (count >= 10) {
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
