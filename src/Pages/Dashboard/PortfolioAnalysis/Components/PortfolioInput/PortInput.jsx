import React, { useState } from "react";
import "./PortInput.css";
import downArrow from "../../../../../Images/Dashboard/downarrowbg.svg";
import searchIcon from "../../../../../Images/Dashboard/search-normal.svg";

export const PortfolioInput = ({ handleSearch, handleFilter }) => {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value)
    handleFilter(event.target.value)
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm)
  }
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="inputflex">
      <form onSubmit={handleSubmit} className="portfolio-overview-form">
        <input type="text" placeholder="Select customer ID" value={searchTerm} onChange={handleSearchChange}/>
        <button type= 'submit'><img src={searchIcon} alt="" /></button>
      </form>

      <div className= {`portfolio-filter ${isOpen ? 'open' : ' '}`}>
        <select className="filterDropdown"    value={selectedOption} onChange={handleFilterChange}  required>
          {/* <option value=''  disabled hidden>Sort by category</option> */}
          <option value='Business'>Business</option>
          <option value='Personal'>Personal</option>
          <option value='Student'>Student</option>
            <option value='Mortgage'>Mortgage</option>
          </select>
        <div className="portfolio-arrow-icon" onClick={toggleDropdown}>
              <img
            src={downArrow}
            alt=""
            className={`porfolio-icon ${isOpen ? "rotate" : ""}`}
          />
          </div>
      </div>
      </div>
  );
};
export default PortfolioInput;