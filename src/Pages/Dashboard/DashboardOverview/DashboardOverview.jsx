import React, { useEffect, useState } from "react";
import DashSearch from "./components/DashSearch";
import PaginationTable from "../../../components/Overview/PaginationTable";
import "./dashboard.css";
import { TableData } from "../../../components/Overview/TableData";
import ChartCards from "./components/ChartCards";

const DashboardOverview = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [searchItems, setSearchItems] = useState("");

  const handleSearch = (term) => {
    setSearchItems(term);
    setCurrentPage(1);
    console.log({ term });
  };

  useEffect(() => {
    const results = TableData.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchItems.toLowerCase()) ||
        user.id.toLowerCase().includes(searchItems.toLowerCase()) ||
        user.status.toLowerCase().includes(searchItems.toLowerCase())
      );
    });
    setSearchResults(results);
    console.log(results);
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
          <DashSearch handleSearch={handleSearch} />
        </div>
        <ChartCards />
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
