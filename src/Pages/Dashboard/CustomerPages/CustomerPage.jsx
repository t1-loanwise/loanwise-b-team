import React from "react";
import "./CustomerPage.css";
import LeftBarContent from "./LeftBar/LeftBarContent";
import LoanDetails from "./RightBar/LoanDetails";
import ManImage from "../../../Images/Dashboard/man.png";

function CustomerPage() {
  return (
    <div className="main-wrapper">
      <div className="centerflex">
        <div className="left">
          <LeftBarContent
            image={ManImage}
            id="LN0000123567"
            name="Joey Doe"
            address="No 56C Springville Avenue Gateway Estate Nigeria"
            email="joeydoe@gmail.com"
            phone="+444234567890"
            employment="Employed"
          />
        </div>

        <div className="right">
          <LoanDetails
            request="N500,000.00"
            disbursed="N500,000.00"
            duration="1 year"
            repayment="Automatic Debit"
            interest="1.5% per month"
            due="15th August, 2023"
            status="Active"
            late="N/A"
            refund="N323,500.00"
            risk="20%"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
