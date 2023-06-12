import React from "react";
import PortfolioChart from "./PortfolioChart";
import { Newportfolio } from "./NewPortfolio/Newportfolio";
import { PortInput } from "./PortfolioInput/PortInput";
// import PaginationTable from "../../../components/Overview/PaginationTable";

const Portfolio = () => {
  return (
    <div className="portfolioWrapper">
      <Newportfolio />
      <PortfolioChart />
      <PortInput />
      {/* <PaginationTable /> */}
    </div>
  );
};

export default Portfolio;
