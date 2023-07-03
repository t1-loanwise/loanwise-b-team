import React from "react";
import "../Newportfolio.css";
import { Button } from "@chakra-ui/react";
import NewFormInput from "../FormControl/NewFormInput";
import { FormProvider, useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const userSchema = Yup.object().shape({
  fullName: Yup.string().required("The name field is required"),
  address: Yup.string()
    .required("Enter your residential address")
    .min(11, "Must be more than 11 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
    phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\\+[1-9]{1,4}[ \\-]*)?(\\([0-9]{2,3}\\)[ \\-]*)?([0-9]{2,4})[ \\-]*[0-9]{3,4}[ \\-]*[0-9]{3,4}$/,
      "Invalid phone number format"
    ),
  
  alternatePhone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\\+[1-9]{1,4}[ \\-]*)?(\\([0-9]{2,3}\\)[ \\-]*)?([0-9]{2,4})[ \\-]*[0-9]{3,4}[ \\-]*[0-9]{3,4}$/,
      "Invalid phone number format"
    )
    .min(10, "Password must be at up to 10 characters"),
  dateOfBirth: Yup.date().required("This field is required"),
  bvn: Yup.string().required("Enter Number"),
});

const PersonalInfo = ({ handleNext }) => {
  /*
   * Validation
   */
  const methods = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = methods;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const values = {
      name: data.fullName,
      email: data.email,
      // password: data.password,
      // confirmPassword: data.confirmPassword,
      id: nanoid(),
    };

    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/borrowers-details",
        values
      );
      // localStorage.setItem("email", data.email);
      handleNext();
      console.log("Form submitted successfully");
      console.log("Unexpected status code:", response.status);
    } catch (error) {
      console.log("Request failed with status code:", error.response.status);
      console.log("Response data:", error.response.data);
      reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="new-portfolio-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="new-portfolio-wrapper">
          <h2>Personal Information</h2>
          <div>
            <NewFormInput
              type="text"
              label="Full Name"
              name="fullName"
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <p className="errorMessage">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <NewFormInput
              type="text"
              label="Residential Address"
              name="address"
              placeholder="Enter address"
            />
            {errors.address && (
              <p className="errorMessage">{errors.address.message}</p>
            )}
          </div>
          <div>
            <NewFormInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
            )}
          </div>

          <div className="phone-cont">
            <NewFormInput
              name="phoneNumber"
              type="phone"
              label="Phone Number"
              placeholder="Enter number"
            />
            {errors.phoneNumber && (
              <p className="errorMessage">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="phone-cont">
            <NewFormInput
              name="alternatePhone"
              type="phone"
              label="Alternate Phone Number"
              placeholder="Enter number"
            />
          </div>
          <div className="date-cont">
            <NewFormInput
              name="dateOfBirth"
              type="date"
              label="Date of Birth"
            />
            {errors.dateOfBirth && (
              <p className="errorMessage">{errors.dateOfBirth.message}</p>
            )}
          </div>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Bank Verification Number"
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <div className="Personalform-btn">
            <Button
              color="#fff"
              bgColor="#007e99"
              type="submit"
              isLoading={methods.formState.isSubmitting}
              isDisabled={!methods.formState.isDirty}
              mx="auto"
              px="40px"
              py="12px"
              borderRadius='0'
            >
              Proceed
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;
