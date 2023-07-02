import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";

const ForgotPassword = () => {
  const formFooter = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  // const onSubmit = () => {
  //   let isValid = Object.keys(errors).length === 0;
  //   {
  //     isValid && navigate("/accVerify");
  //   }
  // };

  const onSubmit = async data => {
    const values = { ...data, id: nanoid() };
    try {
      const response = await axios.post('http://loanwise.onrender.com/api/forget-password', values);
        navigate("/accVerify");
    } catch (error) {
      // console.error(error);
      // console.log("Request failed with status code:", error.response.status);
      // // console.log("Response data:", error.response.data);
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
        // setInValid(
        //   error.response.data.message === "User already exists! Please login" &&
        //     error.response.data.message
        // );

        console.error("Error while submitting form:", error.message);
    
    }
    reset()
  };


  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="We’ve got you, please enter your registered email address"
      formFooter={formFooter}
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
