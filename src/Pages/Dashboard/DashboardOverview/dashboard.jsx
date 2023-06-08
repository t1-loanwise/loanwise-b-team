import React from "react";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";
import DashboardPages from "./DashboardPages.jsx";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <SideBar />
		 <div className="dashboard-pages-wrapper">
				  <DashboardPages />
		</div>
      </div>
    </div>
  );
};

export default Dashboard;
