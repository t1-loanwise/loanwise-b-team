import React from "react";
import PortfolioChart from "./PortfolioChart";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";

const Portfolio = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <SideBar />
        <div className="wrapper">
          <PortfolioChart />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
