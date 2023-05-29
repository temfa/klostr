import React, { useState } from "react";
import "./link.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Link = ({ action, type, question, backAction, no, count, level2, first }) => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  let token;
  let tokenData;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
    if (token !== "undefined") {
      tokenData = token;
    }
  }
  return (
    <QuestionLayout type={type} question={question} action={backAction} no={no} count={count} level2={level2} first={first}>
      <ToastContainer />
      <div className="link-container">
        <p>
          How it works: <br /> Post the link to a listing from ANY website, and we will find the best person for you to split the rent & bills with!
        </p>
        <div className="link-action">
          <input
            type="text"
            placeholder="http://... (paste your link here)"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />

          <h3>Tip: Users who post links find a home 5x more quickly than those who don’t</h3>
          <p>Proceed without posting a link (might take longer)</p>
          {loading ? (
            <Loader />
          ) : (
            <FormButton
              text="Proceed"
              action={async () => {
                setLoading(true);
                const config = {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData}`,
                  },
                };
                const url = "https://dev.api.klostr.com/user/set-property-link";
                const data = {
                  link: link,
                };
                try {
                  await axios.patch(url, data, config).then((response) => {
                    if (response.data.status === 200) {
                      setLoading(false);
                      action();
                    }
                  });
                } catch (error) {
                  setLoading(false);
                  toast.error(error.response.data.message);
                }
              }}
              // action={action}
            />
          )}
        </div>
      </div>
    </QuestionLayout>
  );
};

export default Link;
