import React from "react";
// import FilledBtn from "../../../../components/Button/FilledBtn";
import FormField from "../../../components/Form/FormField.jsx";
import AuthLayout from "../../../components/Layout/AuthLayout.jsx";
import styles from "../../../components/Header/Header.module.css";
import "../AccountVerification/AccountVerify.css"
import { useNavigate } from "react-router-dom";

const PasswordVerify = () => {
	
	const navigate = useNavigate();
	
	const handleClick = () => {
		navigate("/successful")
	}

  return (
    <AuthLayout
      title={"Verify Email Address"}
      subtitle={
        "Please enter the verification code we sent to your registered email address @johndoe@gmail.com"
      }
    >
      <form class="form">
        <div className="otp_input-Content">
          <div className="otp_input-items">
            <FormField
              type={"number"}
              maxlength={"1"}
              className="otp_input"
              id="ist"
              onkeyup="clickEvent(this,'ist')"
            />
          </div>

          <div className="otp_input-items">
            <FormField
              type={"number"}
              maxlength={"1"}
              className="otp_input"
              id="sec"
              onkeyup="clickEvent(this,'sec')"
            />
          </div>

          <div className="otp_input-items">
            <FormField
              type={"number"}
              maxlength={"1"}
              className="otp_input"
              id="third"
              onkeyup="clickEvent(this,'third')"
            />
          </div>

          <div className="otp_input-items">
            <FormField
              type={"number"}
              maxlength={"1"}
              className="otp_input"
              id="fourth"
              onkeyup="clickEvent(this,'fourth')"
            />
          </div>
        </div>

        <div className="Verify-btn-Content">
          {/* <FilledBtn title={"Verify"} size={"100%"} className="Verify-btn" /> */}
          <button className={styles.filledBtn} onClick={handleClick}>Verify</button>
        </div>

        <div className="OTP-Content">
          Didn’t get OTP?{" "}
          <a href="../re" target="_blank" rel="noopener noreferrer">
            Resend in 60s
          </a>
        </div>
      </form>
    </AuthLayout>
  );
};

export default PasswordVerify;
