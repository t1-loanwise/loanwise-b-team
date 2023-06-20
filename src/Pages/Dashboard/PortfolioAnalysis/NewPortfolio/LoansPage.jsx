import React from "react";
import "./Page.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoansPage = () => {
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
            <label>Annual Income</label>
            <input
              type="text"
              {...register("annualIncome", { required: true })}
            />
            {errors.annualIncome && (
              <p>Please enter the length of employment</p>
            )}
          </div>
          <div className="alter">
            <label>Total Years of Employment</label>
            <input
              type="text"
              {...register("yearsOfEmploy", { required: true })}
            />
            {errors.yearsOfEmploy && (
              <p>Please enter the length of employment</p>
            )}
          </div>
          <div className="alter">
            <label>Income-Debt Ratio</label>
            <input
              type="text"
              {...register("incomeDebt", { required: true })}
            />
            {errors.incomeDebt && <p>Please enter the income-Debt Ratio</p>}
          </div>
          <div className="alter">
            <label>No. of Open Credit Lines</label>
            <input
              type="text"
              {...register("creditLine", { required: true })}
            />
            {errors.creditLine && <p>Please enter the creditLine</p>}
          </div>
          <div className="alter">
            <label>Credit Utilization Ratio</label>
            <input
              type="text"
              {...register("utilizationRatio", { required: true })}
            />
            {errors.utilizationRatio && (
              <p>Please enter the length of utilization Ratio</p>
            )}
          </div>
          <div className="alter">
            <label>No. of Mortgage Account</label>
            <input
              type="text"
              {...register("mortgageAccount", { required: true })}
            />
            {errors.mortgageAccount && <p>Please enter the Mortage Account</p>}
          </div>
        </div>

        <h2>Loan Information</h2>
        <label>Loan Purpose</label>
        <input type="text" {...register("loanPurpose", { required: true })} />
        {errors.loanPurpose && <p>Please enter the Loan Purpose</p>}
        <div className="alternative">
          <div className="alter">
            <label>Loan Term</label>
            <input type="type" {...register("loanTerm", { required: true })} />
            {errors.loanTerm && <p>Please enter the Loan Term</p>}
          </div>
          <div className="alter">
            <label>Requested Amount</label>
            <input
              type="num"
              placeholder="N0.00"
              {...register("requestedAmount", { required: true })}
            />
            {errors.requestedAmount && <p>Please enter the Requested Amount</p>}
          </div>
        </div>
        <div className="alternative">
          <div className="alter">
            <label>Loan Company Verfication</label>
            <input
              type="choose"
              placeholder="Select Validity period"
              {...register("companyVerfication", { required: true })}
            />
            {errors.companyVerfication && (
              <p>Please enter the Company Verfication</p>
            )}
          </div>
          <div className="alter">
            <label>Application Type</label>
            <input
              type="text"
              {...register("applicationType", { required: true })}
            />
            {errors.applicationType && <p>Please enter the application Type</p>}
          </div>
        </div>

        <button className="proceed-2" type="submit">
          Analyse
        </button>
      </form>
    </div>
  );
};

export default LoansPage;
