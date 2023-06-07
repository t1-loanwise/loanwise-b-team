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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        nesciunt odit fugit officia molestias provident laborum, fugiat, quae
        quia autem iusto suscipit natus soluta expedita iste adipisci voluptatem
        cum distinctio harum? Molestias mollitia dolore fugiat in labore nulla
        amet veritatis inventore quod, consequatur reprehenderit laboriosam
        libero laborum numquam ab facere sequi beatae, eos iusto sapiente
        voluptatum nisi. Animi commodi laboriosam inventore necessitatibus rem
        et hic earum quidem eum alias culpa aliquid cum optio quam tenetur ea,
        accusantium doloremque vitae! Maiores, quae totam a aut inventore ipsam
        aspernatur exercitationem minus eveniet quia cum obcaecati quibusdam
        iure temporibus praesentium debitis esse architecto?
      </div>
    </>
  );
};

export default Dashboard;
