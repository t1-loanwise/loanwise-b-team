import React from "react";
import "../Newportfolio.css";
import { Button, Select, FormLabel, FormControl } from "@chakra-ui/react";
import NewFormInput from "../FormControl/NewFormInput";
import { FormProvider, useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

const userSchema = Yup.object().shape({
  currentEmployer: Yup.string().required("This field is required"),
  currentRole: Yup.string().required("This field is required"),
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
    ),

  dateOfBirth: Yup.date().required("This field is required"),
  bvn: Yup.string().required("Enter Number"),
});

const EmploymentInfo = ({ handleNext }) => {
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
      localStorage.setItem("email", data.email);
      handleNext();
      console.log("Form submitted successfully");
      console.log("Unexpected status code:", response.status);
    } catch (error) {
      console.log("Request failed with status code:", error.response.status);
      console.log("Response data:", error.response.data);
      reset();
    }
  };

//   curl --location 'https://loanwise.onrender.com/api/employment-details' \
// --data '{
//     "customer_id": "CST_1",
//     "currentEmployer": "ABC Company",
//     "currentRole": "Software Engineer",
//     "annualIncome": 50000,
//     "totalYearsOfEmployment": 5,
//     "incomeDebitRatio": 0.4,
//     "openCreditLines": 3,
//     "creditUtilizationRate": 0.5,
//     "mortgageAccounts": 1,
//     "loanPurpose": "Home Improvement",
//     "loanTerm": 12,
//     "requestedAmount": 10000,
//     "loanCompanyVerification": true,
//     "applicationType": "Online"
// }'

  const options = [
    { value: "Choose answer" },
    { value: "Personal" },
    { value: "Business" },
    { value: "Mortgage" },
    { value: "Student" },
  ];

  const option = options.map((item, index) => (
    <option key={index} value={item.value}>
      {item.value}
    </option>
  ));

  return (
    <FormProvider {...methods}>
      <form className="new-portfolio-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="new-portfolio-wrapper">
          <h2>Employment Information</h2>
          <div>
            <NewFormInput
              type="text"
              label="Current Employere"
              name="currentEmployer"
              placeholder="Enter full name"
            />
            {errors.currentEmployer && (
              <p className="errorMessage">{errors.currentEmployer.message}</p>
            )}
          </div>
          <div>
            <NewFormInput
              type="text"
              label="Current Role"
              name="currentRole"
              placeholder="Enter answer"
            />
            {errors.currentRole && (
              <p className="errorMessage">{errors.currentRole.message}</p>
            )}
          </div>
          <div>
            <NewFormInput
              name="anualIncome"
              type="email"
              label="Annual Income"
              placeholder="Enter answer"
            />
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
            )}
          </div>

          <div className="phone-cont">
            <NewFormInput
              name="phoneNumber"
              type="phone"
              label="Total Years of Employment"
              placeholder="Enter answer"
            />
            {errors.phoneNumber && (
              <p className="errorMessage">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="phone-cont">
            <NewFormInput
              name="alternatePhone"
              type="phone"
              label="Income-Debt Ratio"
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
              label="No of Open Credit Lines."
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="No. of Mortgage Account"
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <h3>Loan Information</h3>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Loan Purpose"
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Loan Term"
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Requested Amount"
              placeholder="Enter number"
            />
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}
          </div>
          <FormControl mb="8px">
            <FormLabel m={0} fontSize={"14px"} padding="2px" color="#00151a">
              Loan Company Verification
            </FormLabel>
            <Select
              isDisabled={isSubmitting}
              name="firstQuestion"
              placeholder="Select a question"
              bgColor="white"
              color="black"
              // mb="8px"
              iconColor="#007e99"
            >
              {option}
            </Select>
            {errors.bvn && <p className="errorMessage">{errors.bvn.message}</p>}{" "}
          </FormControl>

          <div className="date-cont">
            <NewFormInput
              name="bvn"
              type="number"
              label="Application Type"
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

export default EmploymentInfo;
