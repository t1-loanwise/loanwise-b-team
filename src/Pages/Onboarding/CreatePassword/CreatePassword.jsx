import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FormField from "../../../components/Form/FormField";
import styles from "../../../components/Header/Header.module.css";
import { useNavigate } from "react-router-dom";

// import FilledBtn from "../../../components/Button/FilledBtn";

const CreatePassword = () => {
			const navigate = useNavigate();

		const handleClick = () => {
		navigate("/emailVerify");
		}


  return (
    <AuthLayout title={"Create New Password"}   subtitle={"Please enter a password different from your old password"} >
      <div className="create-password-container">
        <form>
          <FormField label={"Password"} placeholder={"Enter answer"} />
          <p>Password must contain at least 6 characters including numbers</p>

          <FormField label={"Confirm Password"} placeholder={"Enter answer"} />
          <button className={styles.filledBtn} onClick={handleClick}>Submit</button>
          {/* <FilledBtn title={"Submit"} size={"100%"} /> */}
        </form>
      </div>
    </AuthLayout>
  );
};

export default CreatePassword;
