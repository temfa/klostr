import React, { useRef } from "react";
import "./link.css";
import QuestionLayout from "../../utils/question-layout/questionLayout";
import FormButton from "../form-button/formButton";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const Link = ({ action, type, question, backAction }) => {
  const inputref = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputref.current.getPlaces();
    console.log(place);
  };
  // console.log(inputref.current.value);

  // let darection = new window.google.maps.DirectionsRenderer();
  // let directionsService = new window.google.maps.DirectionsService();
  // google.maps.event.addEventListener(window, 'load', function () {
  // window.google.maps.event.addEventListener(window, "DOMContentLoaded", function () {
  //   new window.google.maps.places.SearchBox(inputref.current);
  // });
  // if (inputref.current.value) {
  //   destination = inputref.current.value;

  //   var request = {
  //     origin: source,
  //     destination: destination,
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   };
  //   directionsService.route(request, function (response, status) {
  //     if (status == google.maps.DirectionsStatus.OK) {
  //       darection.setDirections(response);
  //     }
  //   });
  // }
  return (
    <QuestionLayout type={type} question={question} action={backAction}>
      <div className="link-container">
        <p>
          How it works: <br /> Post the link to a listing from ANY website, and we will find the best person for you to split the rent & bills with!
        </p>
        <div className="link-action">
          <LoadScript googleMapsApiKey="AIzaSyBrH4lUUhgxxOBroz3InzmJuU2ObE5WRQ4" libraries={["places"]}>
            <StandaloneSearchBox onLoad={(ref) => (inputref.current = ref)} onPlacesChanged={handlePlaceChanged}>
              <input type="text" placeholder="http://... (paste your link here)" />
            </StandaloneSearchBox>
          </LoadScript>

          <h3>Tip: Users who post links find a home 5x more quickly than those who don’t</h3>
          <p>Proceed without posting a link (might take longer)</p>
          <FormButton text="Proceed" action={action} />
        </div>
      </div>
    </QuestionLayout>
  );
};

export default Link;
