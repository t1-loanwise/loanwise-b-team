import React from "react";
import LoanAmount from "../DashboardOverview/components/LoanAmount.jsx";
import DashSearch from "../DashboardOverview/components/DashSearch.jsx";
import DelChart from "./DelChart.jsx";

const Deliquency = () => {
  return (
  
     	<div className="wrapper">
          <DashSearch />
          <LoanAmount />
          <DelChart />
        </div>
  
  );
};

export default Deliquency;
