import React, { useState } from 'react'

import sort from '../../Images/Dashboard/sort.svg'

const DashboardFilter = ({handleFilter}) => {
	const [showOption, setShowOption] = useState(false)
	const [selectedOption, setSelectedOption] = useState("Filter")
	

	const handleFilterClick = () =>{
		setShowOption(!showOption)
	}

	const handleFilterChange = (filterOption) =>{
		if (filterOption === "all"){
			setSelectedOption ("Filter")
		} else {	
			setSelectedOption(filterOption)}
			setShowOption(false)


	}

  return (

	  <div className='filter'>
			<button className='dash-filter-btn' onClick={handleFilterClick}>  
				<img src={sort} alt='filter icon'/>
				<span>{selectedOption}</span>
			</button>

			{showOption && (
				<div className = "list">
					<span onClick={() => handleFilterChange("default")}>Defaulted Loans</span>
					<span onClick={() => handleFilterChange("active")}>Active Loans</span>
					<span onClick={() => handleFilterChange("completed")}>Completed Loans</span>
					<span onClick={() => handleFilterChange("all")}>All</span>
				</div>
			)}

		  
	</div>
  )
}

export default DashboardFilter