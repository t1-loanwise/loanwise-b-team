import React, { useEffect, useState } from "react";
import PortfolioChart from "./Components/PortfolioChart";
import { Newportfolio } from "./Components/NewPortfolio/Newportfolio";
import { PortfolioInput } from "./Components/PortfolioInput/PortInput";
import PortfolioPaginationTable from "./Components/PortfolioTable/PortfolioPaginationTable";
import axios from "axios"

const PortfolioOverview = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [loanData, setLoanData] = useState([]);

  
  useEffect(() => {
    axios.get("https://loanwise.onrender.com/api/loan-table")
      .then(response => {
        setSearchResults(response.data)
        setLoanData(response.data)
        
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      });
  }, []);





  useEffect(() => {
     if (searchTerm !== ' ') {
     const results = loanData.filter((item) => item.customer_id.toLowerCase().includes(searchTerm.toLowerCase()))
     setSearchResults(results);
    };
  

  
  }, [searchTerm,loanData])
  
  const handleSearch = (term) => {
    setSearchTerm(term)
    
  }

  const handleFilter = (category) => {
   const filteredResults = loanData.filter((item) => item.Category === category);
    setSearchResults(filteredResults);
  }

 

  return (
    <div className="portfolioWrapper">
      <Newportfolio />
      <PortfolioChart />
      <PortfolioInput handleSearch={handleSearch}  handleFilter={handleFilter}/>
        <div className="portfolio-pagination-table"><PortfolioPaginationTable data={searchResults}/></div>
   
    </div>
  );
};

export default PortfolioOverview;
