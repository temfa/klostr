import React, { useState } from "react";
import "./started.css";
import Current from "../current/current";
import Bedrooms from "../bedrooms/bedrooms";
import Budget from "../budget/budget";
import Link from "../link/link";
import Logo from "../../assets/logo-white.png";
import Where from "../where/where";
import Alerts from "../alerts/alerts";

const Started = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
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
      <div className="get-started-body">
        {count === 0 ? (
          <Current action={add} />
        ) : count === 1 ? (
          <Link action={add} />
        ) : count === 2 ? (
          <Where count={count - 1} action={add} />
        ) : count === 3 ? (
          <Bedrooms
            count={count - 1}
            action={add}
            backAction={() => {
              setCount(count - 1);
            }}
          />
        ) : count === 4 ? (
          <Budget count={count - 1} action={add} />
        ) : count === 5 ? (
          <Alerts />
        ) : null}
      </div>
    </>
  );
};

export default Started;
