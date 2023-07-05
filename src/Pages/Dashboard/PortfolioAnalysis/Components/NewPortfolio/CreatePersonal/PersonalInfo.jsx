import React from "react";
import "../Newportfolio.css";
import { Button } from "@chakra-ui/react";
import NewFormInput from "../FormControl/NewFormInput";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("The name field is required")
    .min(11, "Must be at least 11 characters"),
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
    )
    .min(10, "Phone number must be at up to 10 characters"),

  alternatePhone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\\+[1-9]{1,4}[ \\-]*)?(\\([0-9]{2,3}\\)[ \\-]*)?([0-9]{2,4})[ \\-]*[0-9]{3,4}[ \\-]*[0-9]{3,4}$/,
      "Invalid phone number format"
    )
    .min(10, "Phone number must be at up to 10 characters"),
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

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data) => {
    const values = {
      name: data.fullName,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      dateOfBirth: data.dateOfBirth,
      bvn: data.bvn,
    };

    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/borrowers-details",
        values
      );
      // localStorage.setItem("email", data.email);
      handleNext();
      console.log("Form submitted successfully");
      if (response && response.status) {
        console.log("Unexpected status code:", response.status);
      }
    } catch (error) {
      if (error.response && error.response.status) {
        console.log("Request failed with status code:", error.response.status);
      }
      // console.log("Response data:", error.response.data);
      // reset();
    }
  };

  // const onSubmit = () => {
  //   let isValid = Object.keys(errors).length === 0;
  //   {
  //     isValid && handleNext();
  //   }
  // };

  return (
    <FormProvider {...methods}>
      <form className="new-portfolio-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="new-portfolio-wrapper">
          <h2>Personal Information</h2>
          <div>
            <NewFormInput
              autoFocus={true}
              type="text"
              label="Full Name"
              name="fullName"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <NewFormInput
              type="text"
              label="Residential Address"
              name="address"
              placeholder="Enter address"
            />
          </div>
          <div>
            <NewFormInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter email address"
            />
          </div>

          <div className="phone-cont">
            <NewFormInput
              name="phoneNumber"
              type="phone"
              label="Phone Number"
              placeholder="Enter number"
            />
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
          </div>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Bank Verification Number"
              placeholder="Enter number"
            />
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
              borderRadius="0"
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
