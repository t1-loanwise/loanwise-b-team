import React, { useEffect, useState } from "react";
import DashSearch from "./components/DashSearch";
import PaginationTable from "../../../components/Overview/PaginationTable";
import "./dashboard.css";
import SearchBar from "../../../components/Overview/SearchBar";
// import { TableData } from "../../../components/Overview/TableData";
import LoanWiseData from "../../../LoanWise.json"
import { CategoryScale } from "chart.js";

const DashboardOverview = () => {
  const [searchResults, setSearchResults] = useState(LoanWiseData);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [searchItems, setSearchItems] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(' ')

  const handleSearch = (term) => {
    setSearchItems(term);
    setCurrentPage(1);
    console.log({ term });
  };
  const handleFilter = (category) => {
    if(category === "All") {
      setSearchResults(LoanWiseData);
      return;
    }
    const filteredResults = LoanWiseData.filter((user) => user["Loan status"] === category);
    setSelectedCategory(category)
    setCurrentPage(1)
    setSearchResults(filteredResults);

   
  }

  useEffect(() => {
     
    if(searchItems !== ''){
      const searchFilterResult = searchResults.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchItems.toLowerCase()) ||
          user.customer_id.toLowerCase().includes(searchItems.toLowerCase()) 
        );
      });
      setSearchResults(searchFilterResult);
    }
  
  }, [searchItems]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = searchResults.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overview-container container">
      <div className="explore">
        <p>
          Explore insightful analyses and risk assessment to make informed
          lending decisions.
        </p>
      </div>
      <div className="overview-search-filter">
        <div>
          <DashSearch handleSearch={handleSearch} handleFilter={handleFilter}/>
        </div>
        {/* <ChartCards /> */}
        <PaginationTable
          data={currentData}
          totalCount={searchResults.length}
          paginate={paginate}
        />
      </div>
    </div>
  );

};

export default DashboardOverview;
