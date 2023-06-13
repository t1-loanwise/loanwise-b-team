import React, { useEffect, useState } from "react";
import PortfolioChart from "./Components/PortfolioChart";
import { Newportfolio } from "./Components/NewPortfolio/Newportfolio";
import { PortfolioInput } from "./Components/PortfolioInput/PortInput";
import PortfolioPaginationTable from "./Components/PortfolioTable/PortfolioPaginationTable";
import { PortfolioTableData } from "./Components/PortfolioTable/PorfolioTableData";

const PortfolioOverview = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('') 
  const [selectedCategory, setSelectedCategory] = useState(' ')
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [originalData, setOriginalData] = useState([])
  const [tableData, setTableData] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term)
    setCurrentPage(1)
    console.log({handleSearch})
  }

  const handleFilter = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    console.log({handleFilter})
  }

  useEffect(() => {
    setOriginalData(PortfolioTableData);
    setTableData(PortfolioTableData);
   
    let searchResults = PortfolioTableData;
    if (searchTerm !== ' ') {
      searchResults = PortfolioTableData.filter((item) => item.id.toLowerCase().includes(searchTerm.toLowerCase()))
    };
    setSearchResults(searchResults);
    setTableData(searchResults)
    console.log({searchResults})

    let filteredResults = searchResults;
    if (selectedCategory !== ' ') {
      filteredResults = searchResults.filter((item) => item.category === selectedCategory )
    }
    setFilteredData(filteredResults);
    setTableData(filteredResults)
  }, [searchTerm, selectedCategory, originalData])
  
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfFirstData)
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="portfolioWrapper">
      <Newportfolio />
      <PortfolioChart />
      <PortfolioInput handleSearch={handleSearch}  handleFilter={handleFilter}/>
        <div className="portfolio-pagination-table"><PortfolioPaginationTable data={filteredData} totalCount={filteredData.length} paginate={paginate}/></div>
   
    </div>
  );
};

export default PortfolioOverview;
