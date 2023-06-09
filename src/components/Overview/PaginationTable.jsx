import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import './overview.css'

import { TableData } from './TableData'
import lessthan from '../../Images/Dashboard/lessthan.svg'
import greaterthan from '../../Images/Dashboard/greaterthan.svg'
import dot from '../../Images/Dashboard/dots.svg'

const PaginationTable = ({data, totalCount}) => {
	const [currentPage, setCurrentPage] = useState(1);
	
	const [dataPerPage] = useState(5);

	const [isActive, setIsActive] = useState(false)
	
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
		setIsActive(!isActive)
	}

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = data.slice(indexOfFirstData, indexOfLastData);

	const navigate = useNavigate();
	 
	const handleClick = () => {
		navigate('/')
	}



  return (
	  <div className='table-wrapper'>
		<div className='performance-wrapper'>
			  <h3>Loan Performance Table</h3>
			  <button>Download</button>
		</div>
		  <table>
			  <thead>
				  <tr className='table-head-container'>
					  <th>ID</th>
					  <th>Name</th>
					  <th>Category</th>
					  <th>Amount</th>
					  <th>Due Date</th>
					  <th>Status</th>
				  </tr>
			  </thead>
			  <tbody>
				  {currentData.map((item, index) => (
					  <tr key={index} onClick={handleClick} 	className='table-body-container'>
						  <td>{item.id}</td>
						  <td>{item.name}</td>
						  <td>{item.category}</td>
						  <td>{item.amount}</td>
						  <td>{item.date}</td>
						  <td className= {`${item.status}`}><button>{item.status}</button></td>
					</tr>
				  ))
				  } 
			  </tbody>
			  {TableData.length > dataPerPage && (
 
				   <tfoot className='pagination-wrapper'>
				  		<tr>
					  		<td colSpan='6'>
							  <ul className='pagination' >
								  <div className='left-paginate'>
									  <li  className='paginate'>
										  <a href='/'>View all Loan history</a>
								  		</li>
									</div>
								  <div className='right-paginate'>
									    <li><img src={greaterthan} alt='a less than icon'  className = 'paginate-img'/></li>
								 	 	{Array.from({ length: Math.ceil(TableData.length / dataPerPage) }).map((_, index) => (
									  	<li key={index}>
										  <button className={`paginate-btn ${currentPage === index + 1 ? "button-active" : ""}`}

												onClick={() => {paginate(index + 1)}} >{index + 1}</button>
										</li>
									 ))}
										<li><img src={dot}alt='dot' className='paginate-dots' /></li>
										<li><p className='page-fifty'>50</p></li>
										<li>  <img src={lessthan} alt='a greater than icon'   className = 'paginate-img'/></li>
								  	</div>
						  		</ul>
					 		 </td>
				  		</tr>
			  </tfoot>
			  )}
			 
		  </table>
		  	
    </div>
  )
}

export default PaginationTable