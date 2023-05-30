import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./loginn.css";
import LoginP from "./LoginP";

const Loginn = () => {
  return (
    <LoginP
      heading={"Welcome Back"}
      subHeading={"Enter your details to sign in"}
    />
  );
};

export default Loginn;
