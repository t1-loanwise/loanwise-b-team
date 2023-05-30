import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./loginn.css";
import { useForm } from "react-hook-form";

const LoginP = ({ heading, subHeading }) => {
  return (
    <AuthLayout>
      <div className="form-text">
        {heading && <h1 className="heading">{heading}</h1>}
        {subHeading && <p className="subHeading">{subHeading}</p>}
      </div>
      {/* <form></form> */}
    </AuthLayout>
  );
};

export default LoginP;
