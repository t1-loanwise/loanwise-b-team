import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Button } from "@chakra-ui/react";
import "./Login.css";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { nanoid } from "nanoid";
import axios from "axios";
// import { object, string } from "yup";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/NewForm/form/FormInput";

/*
 * Interface
 */

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .required("The password field is required")
    .matches(
      /^(?=.*\d).*$/,
      "Password must contain at least 6 characters including a number"
    )
    .min(6, "Password must contain at least 6"),
});

const Login = () => {
  /*
   * Validation
   */
  const methods = useForm({ resolver: yupResolver(userSchema) });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty },
    reset,
  } = methods;

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    const values = {
      email: data.email,
      password: data.password,
      id: nanoid(),
    };
    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/api/login",
        values
      )
        navigate("/dashboard/overview");
        console.log("Form submitted successfully");
    } catch (error) {
      // const errorData = response.data;
      // console.log("Validation error:", errorData);
      if (error.response) {
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
      } else {
        console.error("Error while submitting form:", error.message);
      }
      reset();
    }
  };


  const formFooter = (
    <p>
      Don’t have an account? <a href="/createAccount">Sign Up</a>
    </p>
  );

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Enter your details to sign in"
      formFooter={formFooter}
    >
          <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
            name="email"
            label="Email address"
            placeholder={"Enter email address"}
          />

        <fieldset>
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
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}
        </fieldset>

        <div className="checkForgot">
          <div className="checkText">
            <input type="checkbox" name="Keep me signed in" /> Keep me signed in
          </div>
          <p className="subHeading">
            <a href="/forgotpassword">Forgot Password?</a>
          </p>
        </div>

        <div className="form-btn">
        <Button
              color="#fff"
              bgColor="#007e99"
              type="submit"
              isLoading={methods.formState.isSubmitting}
              isDisabled={!methods.formState.isDirty}
            >
              Sign In
            </Button>
        </div>
      </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default Login;
