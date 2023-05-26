import React, { useState } from "react";
import "./personal.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../loader/loader";

const Personal = ({ question, type, count, no, action, backAction }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [work, setWork] = useState("");
  const [loading, setLoading] = useState(false);

  const validateField = () => {
    let productRegex = /^[0-9]+$/;
    let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (firstName === "") {
      toast.error("First Name cannot be empty");
    } else if (productRegex.test(firstName)) {
      toast.error("First name can only be Alphabelts");
    }
    if (lastName === "") {
      toast.error("Last Name cannot be empty");
    } else if (productRegex.test(lastName)) {
      toast.error("Last Name can only be Alphabelts");
    }
    if (sex === "") {
      toast.error("Sex cannot be empty");
    } else if (productRegex.test(sex)) {
      toast.error("Sex can only be Alphabelts");
    }
    if (email === "") {
      toast.error("Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      toast.error("Enter a valid Email");
    }
    if (phone === "") {
      toast.error("Tel cannot be empty");
    }
    if (password === "") {
      toast.error("Password cannot be empty");
    }
    if (work === "") {
      toast.error("Professional Status cannot be empty");
    }
    // return true;
  };
  return (
    <QuestionLayout question={question} type={type} count={count} no={no} action={backAction}>
      <ToastContainer />
      <div className="form-container">
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-groups">
          <div>
            <div className="form-select">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setPhone(e.target.value);
                }}>
                <option value="+234">+234</option>
                <option value="+234">+234</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="810 508 8175"
              className="tel"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Sex"
              className="sex"
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
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
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <FormButton
            action={async () => {
              setLoading(true);
              if (validateField()) {
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
