import React, { useState } from 'react'
import sort from '../../Images/Dashboard/sort.svg'

const DashboardFilter = ({handleFilter}) => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
		handleFilter(event.target.value)
	};



  return (
	  <div className='filter-wrapper'>
		  <select id='filterDropdown' vlaue={selectedOption} onChange={handleChange}>
			  <option value=''>
				  <div className='filter-logo'>
					  <img src={sort} alt='a filter logo' />
					  	Filter
				  </div>
			  </option>
			  <option value='Default Loan' >Default Loan</option>
			  <option value='Active Loan' >Active Loan</option>
			  <option value='Pending Loan' > Pending Loan</option>
			  <option value= 'Date'>Date</option>
		  </select>
	</div>
  )
}

export default DashboardFilter