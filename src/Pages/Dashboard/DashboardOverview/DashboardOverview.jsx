import React, { useState } from 'react'
import './dashboard.css'

const DashboardOverview = () => {

	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, SetIsLoading] = useState(false)

	const handleSearch = (searchTerm) => {
		SetIsLoading(true);
	}
  return (
	  <div className='overview-container'>
		  <div className='explore'>
			  <p>Explore insightful analyses and risk 		assessment to make informed lending decisions.</p>
		 </div>
		  <div className='overview-search-filter'>
			  
			  
		</div>


    	</div>
  )
}

export default DashboardOverview