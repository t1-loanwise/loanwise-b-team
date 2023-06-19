import React from "react";
import { Route } from "react-router-dom";

const LoansPage = () => {
  return (
    <div>
      <form>
        <h2>Loan Information</h2>
        <label>Loan Purpose</label>
        <input type="text" />
        <div className="alternative">
          <div className="alter">
            <label>Loan Category</label>
            <input type="choose" placeholder="Select Category" />
          </div>
          <div className="alter">
            <label>Amount</label>
            <input type="num" placeholder="$0.00" />
          </div>
        </div>
        <div className="alternative">
          <div className="alter">
            <label>Validity Period</label>
            <input type="choose" placeholder="Select Validity period" />
          </div>
          <div className="alter">
            <label>Interest Rate</label>
            <input type="num" placeholder="0%" />
          </div>
        </div>
        <p className="auto-2">Auto-fill from loan applications</p>

        <h2 className="employ">Documentation</h2>
        <p className="doc">
          Upload 6 month bank statement and any other relevant document,
          application name must macth bank statement name
        </p>
        <input type="choose" placeholder="Choose file" />
        <input type="choose" placeholder="Choose file" />
        <button className="plus">+</button>
        <button className="proceed-2">Proceed</button>
      </form>
    </div>
  );
};

export default LoansPage;
