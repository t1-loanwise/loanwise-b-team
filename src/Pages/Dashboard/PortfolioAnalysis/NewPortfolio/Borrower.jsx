import React from "react";
import "./Page.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Borrower = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
    if (isValid) {
      navigate("/Pages/LoanPage");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Personal Information</h2>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <p>Please enter your full name</p>}
        <label>Residential Address</label>
        <input
          type="text"
          placeholder="Enter address"
          {...register("address", { required: true })}
        />
        {errors.address && <p>Please enter your address</p>}
        <input type="text" />
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          {...register("emailAddress", { required: true })}
        />
        {errors.emailAddress && <p>Please enter your email address</p>}
        <div className="alternative">
          <div className="alter">
            <label>Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && <p>Please enter your phone number</p>}
          </div>
          <div className="alter">
            <label>Alternative Phone Number</label>
            <input type="tel" />
          </div>
        </div>
        <div className="alternative">
          <div className="alter">
            <label>Date of Birth</label>
            <input type="date" />
          </div>
          <div className="alter">
            <label>National Identity Number</label>
            <input
              type="num"
              placeholder="Enter NIN"
              {...register("NIN", { required: true })}
            />
            {errors.NIN && <p>Please enter your NIN</p>}
          </div>
        </div>
        <h2 className="employ">Employment Information</h2>
        <label>Current Employer</label>
        <input
          type="text"
          placeholder="Enter answer"
          {...register("currentEmployer", { required: true })}
        />
        {errors.currentEmployer && <p>Please enter the current employer</p>}
        <label>Job Title</label>
        <input
          type="text"
          placeholder="Enter answer"
          {...register("jobTitle", { required: true })}
        />
        {errors.jobTitle && <p>Please enter the job title</p>}

        <div className="alternative">
          <div className="alter">
            <label>Length of Employment</label>
            <input
              type="text"
              placeholder="Enter answer"
              {...register("lengthOfEmployment", { required: true })}
            />
            {errors.lengthOfEmployment && (
              <p>Please enter the length of employment</p>
            )}
          </div>
          <div className="alter">
            <label>Current Salary</label>
            <input type="text" />
          </div>
        </div>
        <p className="auto-1">Auto-fill from loan application</p>
        <button type="submit" className="proceed-1">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default Borrower;
