import React from "react";
import Barchart from "./BarChart";
import LoanAmount from "./LoanAmount";
import BarGraph from "./BarGraph";
import Earnings from "../../../../Images/Dashboard/earnings.svg";
import LoanAmountComponent from "./LoanAmountComponent";

const ChartCards = () => {
  return (
    <div className="ChartCards">
      <LoanAmount />
      <div className="chart">
        <LoanAmountComponent
          image={Earnings}
          amount={"N6,000,000.00"}
          description={"Interest Earnings"}
        />
        <Barchart />
        <BarGraph />
      </div>
    </div>
  );
};

export default ChartCards;
