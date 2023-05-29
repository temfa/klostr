import React, { useRef, useState } from "react";
import "./where.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Where = ({ count, action, type, question, no, backAction, level2, first }) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const inputref = useRef();
  let token;
  let tokenData;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
    if (token !== "undefined") {
      tokenData = token;
    }
  }

  const handlePlaceChanged = () => {
    const [place] = inputref.current.getPlaces();
    setAddress(place.formatted_address);
  };
  return (
    <QuestionLayout count={count} type={type} question={question} no={no} action={backAction} level2={level2} first={first}>
      <ToastContainer />
      <div className="where-container">
        <LoadScript googleMapsApiKey="AIzaSyBJAsJYls1i4VFztfFAIU6RSTDHVoaPtEI" libraries={["places"]}>
          <StandaloneSearchBox onLoad={(ref) => (inputref.current = ref)} onPlacesChanged={handlePlaceChanged}>
            <input type="text" placeholder="Tell us!" />
          </StandaloneSearchBox>
        </LoadScript>
        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={
              async () => {
                setLoading(true);
                const config = {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData}`,
                  },
                };
                const url = "https://dev.api.klostr.com/user/set-address";
                const data = {
                  address: address,
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
              }
              // action
            }>
            Next
          </button>
        )}
      </div>
    </QuestionLayout>
  );
};

export default Where;
