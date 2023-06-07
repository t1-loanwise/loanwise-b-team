import React from "react";
import DashboardPages from "./DashboardPages";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";
import "./dashboard.css";
import DashSearch from "./components/DashSearch";
import LoanAmount from "./components/LoanAmount";
import Barchart from "./components/BarChart";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <DashboardHeader />
        <div className="dashboard-body">
          <SideBar />
          <div className="wrapper">
            <DashSearch />
            <LoanAmount />
            <Barchart />
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
