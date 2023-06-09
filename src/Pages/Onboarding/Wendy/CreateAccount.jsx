import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
    {
      isValid && navigate("/");
    }
  };

  const formFooter = (
    <p>
      Already have an account? <a href="/loginn">Sign In</a>
    </p>
  );

  return (
    <AuthLayout title={"Create an account"} formFooter={formFooter}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
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
        </fieldset>

        <fieldset>
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
        </fieldset>

        <div className="passwordContainer">
          <fieldset className="password">
            <label htmlFor="password">Password</label>
            <div className="inputField">
              <input
                {...register("password", { required: true, minLength: 6 })}
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder={"Enter Password"}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <RiEyeLine style={{ color: "#007e99" }} />
                ) : (
                  <RiEyeOffLine style={{ color: "#007e99" }} />
                )}
              </button>
            </div>
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
              <button type="button" onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? (
                  <RiEyeLine style={{ color: "#007e99" }} />
                ) : (
                  <RiEyeOffLine style={{ color: "#007e99" }} />
                )}
              </button>
            </div>
          </fieldset>
        </div>
        {(errors.password || errors["confirm password"]) && (
          <p className="errorMessage">
            Password must contain at least 6 characters including numbers
          </p>
        )}
        <div className="terms-and-conditions">
          <input type="radio" id="terms" />
          <span>
            <label htmlFor="terms">
              I agree to the terms of service and privacy policy
            </label>
          </span>
        </div>
        <div className="form-btn">
          <FilledBtn type={"submit"} title={"Create Account"} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default CreateAccount;
