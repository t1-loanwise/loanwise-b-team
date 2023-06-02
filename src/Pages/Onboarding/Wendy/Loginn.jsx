import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./loginn.css";
import { useForm } from "react-hook-form";

const Loginn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    // Handle form submission logic here
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="form-text">
        <h1 className="heading">Welcome Back!</h1>
        <p className="subHeading">Enter your details to sign in</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input__margin">
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
        </div>
        <div className="input__margin">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
            placeholder={"Enter email address"}
          />
          {errors.password && (
            <p className="errorMessage">
              Password must contain at least 6 characters including numbers
            </p>
          )}
        </div>
        <div className="checkForgot">
          <div className="checkText">
            <input type="checkbox" name="Keep me signed in" /> Keep me signed in
          </div>
          <p className="subHeading">
            <a href="/forgotpassword">Forgot Password?</a>
          </p>
        </div>

        <div className="form-btn">
          <FilledBtn type={"submit"} title={"Sign In"} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default Loginn;
