import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { nanoid } from "nanoid";
import axios from "axios";
import { object, string } from "yup";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/*
 * Interface
 */

const userSchema = Yup.object().shape({
  name: Yup.string().required("The name field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .required("The password field is required")
    .matches(
      /^(?=.*\d).*$/,
      "Password must contain at least 6 characters including a number"
    )
    .min(6, "Password must contain at least 6 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match!"
  ),
  radioButton: Yup.string()
    .oneOf(["true"], "The radio field is required")
    .required("The radio field is required"),
});

const CreateAccount = () => {
  /*
   * Validation
   */
  const methods = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      terms: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
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

  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
    {
      isValid && navigate("/accountVerify");
    }
  };

  // const onSubmit = async (data) => {
  //   const values = {
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //     id: nanoid(),
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://loanwise.onrender.com/api/signup",
  //       values
  //     );
  //     if (response.status === 201) {
  //       localStorage.setItem("email", data.email);
  //       navigate("/accountVerify");
  //       console.log("Form submitted successfully");
  //     } else {
  //       console.log("Unexpected status code:", response.status);
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log("Request failed with status code:", error.response.status);
  //       console.log("Response data:", error.response.data);
  //     } else {
  //       console.error("Error while submitting form:", error.message);
  //     }
  //     reset();
  //   }
  // };

  const handleRadioChange = () => {
    setValue("radioButton", "true");
  };

  const formFooter = (
    <p>
      Already have an account? <a href="/login">Sign In</a>
    </p>
  );

  return (
    <AuthLayout title={"Create an account"} formFooter={formFooter}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="name">Full Name</label>
          <input
            {...register("name")}
            name="name"
            id="name"
            type="text"
            placeholder={"Enter full name"}
          />
          {errors.name && <p className="errorMessage">{errors.name.message}</p>}
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
                placeholder="Enter Password"
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
                placeholder="Confirm Password"
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
        {errors.password && (
          <p className="errorMessage">{errors.password.message}</p>
        )}
        {!errors.password && errors.confirmPassword ? (
          <p className="errorMessage">{errors.confirmPassword.message}</p>
        ) : (
          ""
        )}

        <div
          className="termz"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div className="terms-and-conditions">
            <input
              {...register("radioButton")}
              type="radio"
              id="terms"
              name="terms"
              value="true"
              onChange={handleRadioChange} // Add onChange event handler
            />
            <span>
              <label htmlFor="terms">
                I agree to the terms of service and privacy policy
              </label>
            </span>
          </div>
          {errors.radioButton && (
            <p className="errorMessage">{errors.radioButton.message}</p>
          )}
        </div>
        <div className="form-btn">
          <FilledBtn
            type={"submit"}
            title={"Create Account"}
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </AuthLayout>
  );
};

export default CreateAccount;
