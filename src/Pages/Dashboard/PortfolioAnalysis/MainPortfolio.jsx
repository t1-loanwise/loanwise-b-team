import React from "react";
import PortfolioChart from "./PortfolioChart";
import { Newportfolio } from "./NewPortfolio/Newportfolio";
import { PortInput } from "./PortfolioInput/PortInput";

const Portfolio = () => {
  return (
   
        <div className="wrapper">
          <Newportfolio />
          <PortfolioChart />
          <PortInput />
        </div>
  
  );
};

export default Portfolio;
