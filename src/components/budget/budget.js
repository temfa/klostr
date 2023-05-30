import React, { useEffect, useRef, useState } from "react";
import "./budget.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Budget = ({ backAction, count, action, no, type, level2, first }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "narrowSymbol",
  });
  const [currentPrice, setCurrentPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const thumbRef = useRef();
  const sliderRef = useRef();
  let token;
  let tokenData;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
    if (token !== "undefined") {
      tokenData = token;
    }
  }
  useEffect(() => {
    thumbRef.current.onmousedown = (event) => {
      event.preventDefault(); // prevent selection start (browser action)

      let shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;
      // shiftY not needed, the thumbRef.current moves only horizontally

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - sliderRef.current.getBoundingClientRect().left;

        // the pointer is out of sliderRef.current => lock the thumbRef.current within the bounaries
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbRef.current.style.left = newLeft + "px";
        setCurrentPrice(Math.ceil((newLeft / 642) * 25000000));
      }

      function onMouseUp() {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, []);
  return (
    <QuestionLayout question="What is your budget?" action={backAction} count={count} no={no} type={type} level2={level2} first={first}>
      <ToastContainer />
      <div className="budget-container">
        <div className="budget-amount">
          <div className="budget-start">
            <p>{formatter.format(0)}</p>
          </div>
          <div className="budget-end">
            <p>{formatter.format(25000000)}</p>
          </div>
        </div>
        <div className="budget-wrapper" ref={sliderRef}>
          <div className="thumb" ref={thumbRef}></div>
        </div>
      </div>
      <p className="current-budget">Current Budget: {formatter.format(currentPrice)}</p>
      <div className="budget-input">
        <input
          type="text"
          value={currentPrice}
          onChange={(e) => {
            if (currentPrice > 25000000) {
              setError(true);
            } else {
              setError(false);
              setCurrentPrice(e.target.value);
            }
          }}
        />
        {error ? <small>You cannot exceed #25,000,000 as your budget</small> : null}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <FormButton
          text="Set Budget"
          action={async () => {
            setLoading(true);
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenData}`,
              },
            };
            const url = "https://dev.api.klostr.com/user/set-budget";
            const data = {
              budget: currentPrice,
            };
            try {
              await axios.patch(url, data, config).then((response) => {
                if (response.data.status === 200) {
                  action();
                  setLoading(false);
                }
              });
            } catch (error) {
              toast.error(error.response.data.message);
              setLoading(false);
            }
          }}
        />
      )}
    </QuestionLayout>
  );
};

export default Budget;
