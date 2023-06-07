import React from "react";
import PortfolioChart from "./PortfolioChart";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";
import { Newportfolio } from "../../../components/NewPortfolio/Newportfolio";
import { Boxes  } from "../../../components/input/Boxes";

const Portfolio = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <SideBar />
        <div className="wrapper">
         <Newportfolio/>
          <PortfolioChart />
          <Boxes/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
