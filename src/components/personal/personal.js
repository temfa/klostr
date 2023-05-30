import React, { useState, useRef, useEffect } from "react";
import "./personal.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../loader/loader";
import Dropdown from "../../assets/select.svg";
import OutsideClick from "../outside-click/outsideClick";

const Personal = ({ question, type, count, no, action, backAction, first }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const sexRef = useRef();
  const sexualRef = useRef();
  const passwordRef = useRef();
  const workRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState("https://flagcdn.com/w320/ng.png");
  const [view, setView] = useState(false);
  const [phone, setPhone] = useState("+234");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");
  const [sexual, setSexual] = useState("");
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
    }
    if (email === "") {
      setErrorFor(emailRef.current, "Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      setErrorFor(emailRef.current, "Enter a valid Email");
    }
    // if (phone === "") {
    //   setErrorFor(phoneRef.current, "Tel cannot be empty");
    // }
    if (password === "") {
      setErrorFor(passwordRef.current, "Password cannot be empty");
    }
    if (number === "") {
      setErrorFor(numberRef.current, "Number cannot be empty");
    }
    if (work === "") {
      setErrorFor(workRef.current, "Professional Status cannot be empty");
    }
    if (sexual === "") {
      setErrorFor(sexualRef.current, "Sexual Orientation cannot be empty");
    }
    // return true;
  };
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <QuestionLayout question={"Signup to get started with Klostr"} type={type} count={count} no={no} action={backAction} first={first}>
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
              <div
                className="phone-code-view"
                onClick={() => {
                  setView(true);
                }}>
                <img src={display} alt="Flags" />
                <p>{phone}</p>
                <img src={Dropdown} alt="dropdown" />
              </div>
              <OutsideClick
                onClickOutside={() => {
                  setView(false);
                }}>
                {view ? (
                  <div className="phone-code-option">
                    {countries?.map((item, index) => {
                      if (item.idd.suffixes === undefined) return null;
                      else {
                        return (
                          <div
                            value={`${item.idd.root}${item.idd?.suffixes[0]}`}
                            key={index}
                            onClick={() => {
                              setDisplay(item.flags.png === undefined ? item.flags.svg : item.flags.png);
                              setPhone(`${item.idd.root}${item.idd?.suffixes[0]}`);
                              setView(false);
                            }}>
                            <img src={item.flags.png === undefined ? item.flags.svg : item.flags.png} alt="" />
                            <p>{`${item.idd.root}${item.idd?.suffixes[0]}`}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : null}
              </OutsideClick>
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
              <select
                name=""
                id=""
                onChange={(e) => {
                  setSex(e.target.value);
                }}
                ref={sexRef}>
                <option value="">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <small></small>
            </div>
          </div>
          <p>Use your WhatsApp Telephone No, so your perfect match can reach out to you!</p>
        </div>
        <div className="form-group">
          <div>
            <select
              name=""
              id=""
              ref={sexualRef}
              onChange={(e) => {
                setSexual(e.target.value);
              }}>
              <option value="">Sexual Orientation</option>
              <option value="Heterosexual">Heterosexual</option>
              <option value="Gay">Gay</option>
              <option value="Lesbian">Lesbian</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Asexual">Asexual</option>
              <option value="Queer">Queer</option>
              <option value="Demisexual">Demisexual</option>
              <option value="Pansexual">Pansexual</option>
            </select>
            <small></small>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => {
                setWork(e.target.value);
              }}
              ref={workRef}>
              <option value="">Professional Status</option>
              <option value="Worker">Worker</option>
              <option value="Employee">Employee</option>
              <option value="Self-employed">Self-employed</option>
            </select>
            <small></small>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <FormButton
            action={async () => {
              setLoading(true);
              if (validateField()) {
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
