import React, { useState, useEffect } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { nanoid } from 'nanoid'
import axios from 'axios'
import { object, string } from 'yup';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

/*
 * Interface
*/
let userSchema = object().shape({
  name: string().required('The name field is required'),
  email: string().email('Invalid email').required('The email field is required'),
  password: Yup.string()
    .required('The password field is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{6,20}$/,
      "Password must contain at least 6 characters including numbers"
    ),
  confirmPassword: Yup.string()
    .required(true)
    .oneOf([Yup.ref("password")], "Passwords do not match!"),
  radio: Yup.string().required('The radio field is required'),
});


const CreateAccount = () => {
  /*
   * Validation
   */
  const methods = useForm({ resolver: yupResolver(userSchema) })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = methods;
  const navigate = useNavigate();

  /*
  * useStates
  */

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  /**
  * Fxns
  */

  const onSubmit = async data => {
    const values = { ...data, id: nanoid() }
    const response = await axios.post('https://loanwise.onrender.com/api/signup', values)
    if (response.status === 201) {
      navigate("/accountVerify")
    }
    methods.reset();
    // let isValid = Object.keys(errors).length === 0;
    // {
    //   isValid && navigate("/accountVerify");
    // }
  };

  const formFooter = (
    <p>
      Already have an account? <a href="/login">Sign In</a>
    </p>
  );

  return (
    <AuthLayout title={"Create an account"} formFooter={formFooter}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <fieldset>
          <label htmlFor="name">Full Name</label>
          <input
            {...register("name")}
            name="name"
            id="name"
            type="text"
            placeholder={"Enter full name"}
          />
          {errors.name && (
            <p className="errorMessage">{errors.name.message}</p>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email address</label>
          <input
            {...register("email")}
            name="email"
            type="email"
            id="email"
            placeholder={"Enter email address"}
          />
          {errors.email && (
            <p className="errorMessage">{errors.email.message}</p>
          )}

        </fieldset>

        <div className="passwordContainer">
          <fieldset className="password">
            <label htmlFor="password">Password</label>
            <div className="inputField">
              <input
                {...register("password")}
                type={passwordVisible ? "text" : "password"}
                name="password"
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
                {...register("confirmPassword")}
                name="confirmPassword"
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
        {(errors.password || errors["confirmPassword"]) && (
          <p className="errorMessage">
            {errors.password.message}
          </p>
        )}
         {errors.confirmPassword && (
              <p className="errorMessage">{errors.confirmPassword.message}</p>
            )}
        <div className="termz" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
        }}>
          <div className="terms-and-conditions">
            <input
              {...register("radio")}
              type="radio" id="terms" name="terms" />
            <span>
              <label htmlFor="terms">
                I agree to the terms of service and privacy policy
              </label>
            </span>
          </div>
          {errors.radio && (
            <p className="errorMessage">{errors.radio.message}</p>
          )}
        </div>
        <div className="form-btn">
          <FilledBtn type={"submit"} title={"Create Account"} isLoading={isSubmitting} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default CreateAccount;
