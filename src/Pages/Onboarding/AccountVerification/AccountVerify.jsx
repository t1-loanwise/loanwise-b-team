import React, { useEffect, useRef, useState } from "react";
import FilledBtn from "../../../components/Button/FilledBtn";
import FormField from "../../../components/Form/FormField.jsx";
import AuthLayout from "../../../components/Layout/AuthLayout.jsx";
import "./AccountVerify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AccountVerify = () => {
  /**
   * hooks
   */
  const navigate = useNavigate();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const [resendTimeout, setResendTimeout] = useState(10);

  /**
   * form validation
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * variable
   */
  // const customOTPValues = [2345, 0102, 5443];

  /**
   * effects
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (resendTimeout === 0) {
        clearTimeout(timer);
      } else {
        setResendTimeout(resendTimeout - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendTimeout]);

  /**
   * function
   */

  const handleResendClick = () => {
    if (resendTimeout === 0) {
      setResendTimeout(10); // Restart the timer (set to 60 seconds)
    }
  };

  const handleVerifyClick = () => {
    const userInput =
      inputRef1.current.value +
      inputRef2.current.value +
      inputRef3.current.value +
      inputRef4.current.value;

    {
      userInput && userInput.length === 4 && navigate("/securityQuestion");
    }

    console.log(errors["otp-1"]);
  };

  // const handleClick = () => {
  //   // get otp entered§
  //   const userInput =
  //     inputRef1.current +
  //     inputRef2.current +
  //     inputRef3.current +
  //     inputRef4.current;
  //   const isOTPValid = customOTPValues.contains(userInput);

  //   if (isOTPValid) {
  //     navigate("/successful");
  //   }
  // };

  /**
   * component
   */
  const formFooter = (
    <>
      Didn’t get OTP?{" "}
      <a href="../re" target="_blank" rel="noopener noreferrer">
        {resendTimeout === 0 ? "" : `Resend in ${resendTimeout}s`}
      </a>
    </>
  );

  return (
    <AuthLayout
      title={"Verify Email Address"}
      subtitle={
        "Thank you for signing up. Please enter the verification code we sent to your email address @johndoe@gmail.com"
      }
      formFooter={formFooter}
    >
      <form className="form" onSubmit={handleSubmit(handleVerifyClick)}>
        <div className="otp_input-Content">
          <div className="otp_input-items">
            <FormField
              {...register("otp-1", { required: true })}
              type="number"
              pattern="\d*"
              maxLength={1}
              className="otp_input"
              id="ist"
              name="otp-1"
              innerRef={inputRef1}
              onKeyUp={() => inputRef2.current.focus()}
            />
          </div>

          <div className="otp_input-items">
            <FormField
              {...register("otp-2", { required: true })}
              type="number"
              pattern="\d*"
              maxLength={1}
              className="otp_input"
              id="sec"
              name="otp-2"
              innerRef={inputRef2}
              onKeyUp={() => inputRef3.current.focus()}
            />
          </div>

          <div className="otp_input-items">
            <FormField
              {...register("otp-3", { required: true })}
              type="number"
              pattern="\d*"
              maxLength={1}
              className="otp_input"
              id="third"
              name="otp-3"
              innerRef={inputRef3}
              onKeyUp={() => inputRef4.current.focus()}
            />
          </div>

          <div className="otp_input-items">
            <FormField
              {...register("otp-4", { required: true })}
              type="number"
              pattern="\d*"
              maxLength={1}
              className="otp_input"
              id="fourth"
              name="otp-4"
              innerRef={inputRef4}
              // onkeyup="clickEvent(this,'fourth')"
            />
          </div>
        </div>
        {(errors["otp-1"] ||
          errors["otp-2"] ||
          errors["otp-3"] ||
          errors["otp-4"]) && (
          <p className="errorMessage">Please enter a valid value</p>
        )}

        <div className="form-btn">
          <FilledBtn
            title={resendTimeout === 0 ? "Resend" : "Verify"}
            size={"100%"}
            onClick={
              resendTimeout === 0 ? handleResendClick : handleVerifyClick
            }
          />
        </div>
      </form>
    </AuthLayout>
  );
};

export default AccountVerify;
