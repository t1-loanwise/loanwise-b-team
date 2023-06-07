import React from "react";
import DashboardHeader from "../../../components/SideBar/DashboardHeader.jsx";
import SideBar from "../../../components/SideBar/SideBar.jsx";

const Recovery = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <SideBar />
        <div className="wrapper">yo</div>
      </div>
    </div>
  );
};

export default Recovery;
