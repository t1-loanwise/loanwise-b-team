import React from "react";
import PortfolioChart from "./PortfolioChart";
import { Newportfolio } from "../../../components/NewPortfolio/Newportfolio";
import { Boxes  } from "../../../components/input/Boxes";

const Portfolio = () => {
  return (
   
        <div className="wrapper">
         <Newportfolio/>
          <PortfolioChart />
          <Boxes/>
        </div>
  
  );
};

export default Portfolio;
