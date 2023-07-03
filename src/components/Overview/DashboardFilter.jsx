import React, { useState } from 'react'

import sort from '../../Images/Dashboard/sort.svg'

const DashboardFilter = ({handleFilter}) => {
	const [showOption, setShowOption] = useState(false)
	const [selectedOption, setSelectedOption] = useState("Filter")


	const handleFilterClick = () =>{
		setShowOption(!showOption)
	}

	const handleFilterChange = (filterOption) => {
			setSelectedOption(filterOption === "All" ? "Filter" : filterOption)
			setShowOption(false)
			handleFilter(filterOption)
	}
	



  return (

	  <div className='filter'>
			<button className='dash-filter-btn' onClick={handleFilterClick}>  
				<img src={sort} alt='filter icon'/>
				<span>{selectedOption}</span>
			</button>

			{showOption && (
				<div className = "list">
					<span onClick={() => handleFilterChange("Defaulted")}>Defaulted Loans</span>
					<span onClick={() => handleFilterChange("Active")}>Active Loans</span>
					<span onClick={() => handleFilterChange("Completed")}>Completed Loans</span>
					<span onClick={() => handleFilterChange("All")}>All</span>
				</div>
			)}

		  
	</div>
  )
}

export default DashboardFilter