import React, { useState, useRef } from "react";
import "./personal.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../loader/loader";

const Personal = ({ question, type, count, no, action, backAction, first }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const numberRef = useRef();
  const sexRef = useRef();
  const passwordRef = useRef();
  const workRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [work, setWork] = useState("");
  const [loading, setLoading] = useState(false);
  function setErrorFor(input, message) {
    let formParent = input.parentElement;
    let small = formParent.querySelector("small");

    small.innerText = message;

    // formParent.className = "form-group error";
  }
  const validateField = () => {
    let productRegex = /^[0-9]+$/;
    let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (firstName === "") {
      setErrorFor(firstNameRef.current, "First Name cannot be empty");
    } else if (productRegex.test(firstName)) {
      setErrorFor(firstNameRef.current, "First name can only be Alphabelts");
    }
    if (lastName === "") {
      setErrorFor(lastNameRef.current, "Last Name cannot be empty");
    } else if (productRegex.test(lastName)) {
      setErrorFor(lastNameRef.current, "Last Name can only be Alphabelts");
    }
    if (sex === "") {
      setErrorFor(sexRef.current, "Sex cannot be empty");
    } else if (productRegex.test(sex)) {
      setErrorFor(sexRef.current, "Sex can only be Alphabelts");
    }
    if (email === "") {
      setErrorFor(emailRef.current, "Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      setErrorFor(emailRef.current, "Enter a valid Email");
    }
    if (phone === "") {
      setErrorFor(phoneRef.current, "Tel cannot be empty");
    }
    if (password === "") {
      setErrorFor(passwordRef.current, "Password cannot be empty");
    }
    if (work === "") {
      setErrorFor(workRef.current, "Professional Status cannot be empty");
    }
    // return true;
  };

  return (
    <QuestionLayout question={question} type={type} count={count} no={no} action={backAction} first={first}>
      <ToastContainer />
      <div className="form-container">
        <div className="form-group">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              ref={firstNameRef}
            />
            <small></small>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              ref={lastNameRef}
            />
            <small></small>
          </div>
        </div>
        <div className="form-group">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              ref={emailRef}
            />
            <small></small>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              ref={passwordRef}
            />
            <small></small>
          </div>
        </div>
        <div className="form-groups">
          <div>
            <div className="form-select">
              <select
                name=""
                ref={phoneRef}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}>
                <option value="+234">+234</option>
                <option value="+234">+234</option>
              </select>
              <small></small>
            </div>
            <div className="tel">
              <input
                type="text"
                placeholder="810 508 8175"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                ref={numberRef}
              />
              <small></small>
            </div>
            <div className="sex">
              <input
                type="text"
                placeholder="Sex"
                value={sex}
                onChange={(e) => {
                  setSex(e.target.value);
                }}
                ref={sexRef}
              />
              <small></small>
            </div>
          </div>
          <p>Use your WhatsApp Telephone No, so your perfect match can reach out to you!</p>
        </div>
        <div className="form-single">
          <input
            type="text"
            placeholder="Profession"
            value={work}
            onChange={(e) => {
              setWork(e.target.value);
            }}
            ref={workRef}
          />
          <small></small>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <FormButton
            action={async () => {
              setLoading(true);
              if (!validateField()) {
                setLoading(false);
                toast.error("Check the fields");
              } else {
                const config = {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };
                const url = "https://dev.api.klostr.com/auth/signup";
                const data = {
                  first_name: firstName,
                  last_name: lastName,
                  sex: sex.toLowerCase(),
                  phone_number: `${phone.replace("+", "")}${number}`,
                  social_link: "social",
                  profession: work,
                  email: email,
                  password: password,
                };
                try {
                  await axios.post(url, data, config).then((response) => {
                    if (response.data.status === 200) {
                      localStorage.setItem("token", response.data.body.token.accessToken);
                      setLoading(false);
                      action();
                    }
                  });
                } catch (error) {
                  setLoading(false);
                  toast.error(error.response.data.message);
                }
              }
            }}
            // action={action}
            text="Next"
          />
        )}
      </div>
    </QuestionLayout>
  );
};

export default Personal;
