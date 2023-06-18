import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/api/forget-password', data);
      if (response.status === 200) {
        navigate("/accVerify");
      }
    } catch (error) {
      console.error(error);
    }
    reset();
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
