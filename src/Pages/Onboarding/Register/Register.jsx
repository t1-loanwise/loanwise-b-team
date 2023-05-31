import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FormField from "../../../components/Form/FormField";
// import FilledBtn from "../../../components/Button/FilledBtn";
import "./register.css";
import { useNavigate } from "react-router-dom";
import styles from "../../../components/Header/Header.module.css";

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => {

	  navigate("/security-question");

   }
  return (
    <AuthLayout title={"Create an account"}>
      <div className="register-container">
        <form>
          <FormField label={"Full Name"} placeholder={"Enter full name"} />
          <FormField
            label={"Email Address"}
            placeholder={"Enter email address"}
          />
          <div className="password-box">
            <FormField
              label={"Password"}
              type={"password"}
              // value={"Password"}
              className={"password-content"}
            />

            <FormField
              label={"Confirm Password"}
              type={"password"}
              // value={"password"}
              className={"confirmpassword-content"}
            />
          </div>
          {/* <p>Password must contain at least 6 characters including numbers</p> */}
          <input type="radio" value="" /> I agree to the terms of service and
          privacy policy
        <button className={styles.filledBtn} onClick={handleClick}>Create Account</button>
          {/* <FilledBtn title={"Submit"} size={"100%"}  onClick={handleClick} /> */}

        </form>

        <p>
          Already have an account? <a href="/login">Sign In </a>{" "}
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
