import React from "react";
import Barchart from "./BarChart";
import LoanAmount from "./LoanAmount";
import BarGraph from "./BarGraph";

const ChartCards = () => {
  return (
    <div>
      <LoanAmount />
      <div className="chart">
        <Barchart />
        <BarGraph />
      </div>
    </div>
  );
};

export default ChartCards;
