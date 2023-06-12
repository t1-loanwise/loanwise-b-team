import React from "react";
import "../dashboard.css";

const LoanAmountComponent = ({ image, amount, description }) => {
  return (
    <div className="loanAmountWrapper">
      <div className="loanAmount">
        <div className="loanAmountIcon">
          <img src={image} alt="" />
        </div>
        <h3>{amount}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LoanAmountComponent;
