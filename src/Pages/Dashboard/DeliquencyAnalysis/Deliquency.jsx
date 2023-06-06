import React from "react";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";
import LoanAmount from "../DashboardOverview/components/LoanAmount.jsx";
import DashSearch from "../DashboardOverview/components/DashSearch.jsx";
import DelChart from "./DelChart.jsx";

const Deliquency = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <SideBar />
        <div className="wrapper">
          <DashSearch />
          <LoanAmount />
          <DelChart />
        </div>
      </div>
    </div>
  );
};

export default Deliquency;
