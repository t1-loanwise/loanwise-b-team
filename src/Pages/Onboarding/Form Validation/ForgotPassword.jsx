import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
    {
      isValid && navigate("/accVerify");
    }
  };
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="We’ve got you, please enter your registered email address"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="forgotPassword">
        <fieldset>
          <label htmlFor="email">Email address</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder={"Enter email address"}
          />
          {errors.email?.type === "required" && (
            <p className="errorMessage">The email field is required</p>
          )}
        </fieldset>

        <div className="form-btn">
          <FilledBtn type={"submit"} title={"Proceed"} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
