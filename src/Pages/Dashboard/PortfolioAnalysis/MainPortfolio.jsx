import React from "react";
import PortfolioChart from "./PortfolioChart";
import { Newportfolio } from "./NewPortfolio/Newportfolio";
import { PortInput } from "./PortfolioInput/PortInput";
import PaginationTable from "../../../components/Overview/PaginationTable";


const Portfolio = () => {
  return (
   
        <div className="wrapper">
          <Newportfolio />
          <PortfolioChart />
          <PortInput />
          <PaginationTable />
        </div>
  
  );
};

export default Portfolio;
