import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./loginn.css";
import { useForm } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const NewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="form-text">
        <h1 className="heading">Create an account</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input__margin">
          <label htmlFor="name">Full Name</label>
          <input
            {...register("name", { required: true })}
            id="name"
            type="text"
            placeholder={"Enter full name"}
          />
          {errors.name && (
            <p className="errorMessage">The name field is required</p>
          )}
        </div>
        <div className="input__margin">
          <label htmlFor="email">Email address</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder={"Enter email address"}
          />
          {errors.email && (
            <p className="errorMessage">The email field is required</p>
          )}
        </div>
        <div className="passwordContainer input__margin">
          <fieldset className="password">
            <label htmlFor="password">Password</label>
            <div className="inputField">
              <input
                {...register("password", { required: true, minLength: 6 })}
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder={"Enter Password"}
              />
              <button onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <RiEyeLine style={{ color: "#007e99" }} />
                ) : (
                  <RiEyeOffLine style={{ color: "#007e99" }} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="errorMessage">
                Password must contain at least 6 characters including numbers
              </p>
            )}
          </fieldset>
          <fieldset className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="inputField">
              <input
                {...register("confirm password", {
                  required: true,
                  minLength: 6,
                })}
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder={"Confirm Password"}
              />
              <button onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? (
                  <RiEyeLine style={{ color: "#007e99" }} />
                ) : (
                  <RiEyeOffLine style={{ color: "#007e99" }} />
                )}
              </button>
            </div>
            {errors["confirm password"] && (
              <p className="errorMessage">
                Password must contain at least 6 characters including numbers
              </p>
            )}
          </fieldset>
        </div>
        <div className="terms-and-conditions">
          <input type="radio" id="terms" />
          <span>
            <label htmlFor="terms">
              I agree to the terms of service and privacy policy
            </label>
          </span>
        </div>
        <div className="form-btn">
          <FilledBtn
            type={"submit"}
            title={"Create Account"}
            link={"/emailVerify"}
          />
        </div>
      </form>
      <p className="already">
        Already have an account? <a href="/loginn">Sign In</a>
      </p>
    </AuthLayout>
  );
};

export default NewAccount;
