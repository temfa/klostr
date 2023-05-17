import React from "react";
import "./landing.css";
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";
import Find from "../../components/find/find";
import Active from "../../components/active/active";
import Questions from "../../components/questions/questions";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Find />
      <Active />
      <Questions />
      <Footer />
    </>
  );
};

export default Landing;
