import React, { useState } from 'react'
import './dashboard.css'
import DashSearch from './components/DashSearch'
import LoanAmount from './components/LoanAmount'
import SearchBar from '../../../components/Overview/SearchBar'
import DashboardFilter from '../../../components/Overview/DashboardFilter'
import PaginationTable from '../../../components/Overview/PaginationTable'



const DashboardOverview = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    SetIsLoading(true);
  };
  return (
	  <div className='overview-container'>
		  <div className='explore'>
			  <p>Explore insightful analyses and risk assessment to make informed lending decisions.</p>
		 </div>
		  <div className='overview-search-filter'>
			  <DashSearch />
      		<LoanAmount />
			  
		  </div>
		  <div>
			<SearchBar />
		  <DashboardFilter />
		  <PaginationTable />
		  </div>
		 

    	</div>
  )
}

export default DashboardOverview
