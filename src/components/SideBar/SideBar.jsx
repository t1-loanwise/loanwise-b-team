import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import dashboardIcon from '../../Images/Dashboard/home.svg' 
import portfolio from '../../Images/Dashboard/portfolio.svg' 
import repayment from '../../Images/Dashboard/money-recive.svg' 
import recovery from '../../Images/Dashboard/recovery-convert.svg' 
import deliquency from '../../Images/Dashboard/deliquency.svg' 
import general from '../../Images/Dashboard/book.svg' 
import setting from '../../Images/Dashboard/setting-2.svg' 
import logout from '../../Images/Dashboard/logout.png'
import greater from '../../Images/Dashboard/greater.svg'  



const SideBar = () => {
	const [sidebar, setSidebar] = useState(false);
	 const [isActive, setIsActive] = useState(false);
 
	const showSidebar = () => {	
		setSidebar(!sidebar);
		setIsActive(!isActive);
	} 
  return (
	  <nav>
		  <div className='sidebar-wrapper'>
				<div className='sidebar-top'>
					<NavLink to='/dashboard/overview' className={({ isActive}) => isActive ? 'active' : ''}>
						<button>
							<img src={dashboardIcon} alt='a dashboard icon' className='dashboard-icon'  />
								Dashboard
							</button>
						</NavLink>
					
						<NavLink to='/dashboard/portfolio-analysis'>
							<button>
							<img src={portfolio} alt='a portfolio icon' className='dashboard-icon' />
							Portfolio Analysis
							</button>
						</NavLink>
					
						<NavLink to='/dashboard/repayment'>
							<button>
								<img src={repayment} alt='a repayment icon'  className='dashboard-icon' />
								Repayment
							</button>
						</NavLink>
				
						<NavLink to='/dashboard/recovery-management'>
							<button>
								<img src={recovery} alt='a recovery convert icon' className='dashboard-icon'  />
								Recovery Management
							</button>
						</NavLink>

						<NavLink to='/dashboard/deliquency-analysis'>
							<button>
								<img src={deliquency} alt='a deliquency analysis icon' className='dashboard-icon'  />
								Deliquency Analysis
							</button>
						</NavLink>

				  		<div className='general-wrapper'>
					  		<button onClick={showSidebar} className={isActive ? 'botton-active' : ''}>
							
						  		<div className='general'>
							  		<div className='general-right'>
							  			<img src={general} alt='a general icon' className='dashboard-icon'  />
											General
						  			</div>
						  			{sidebar ?  (<div>
							  		<img src={greater} alt='a general' className='general-icon-rotate' />
									</div>) : (<div>
							  		<img src={greater} alt='a general' className='general-icon' />
									</div>) }
						 		 </div>
					  		</button>
					  				{sidebar && (<div className='sub-menu'>
						  				<button>
							  				<NavLink to='/dashboard/message'  className={({ isActive}) => isActive ? 'submenu-active-1' : ''}>Messages</NavLink>
						  				</button>
						  				<button>
							  				<NavLink to='/dashboard/user-profile' className={({ isActive}) => isActive ? 'submenu-active-2' : ''}>User Profile</NavLink>
						  				</button>
						  				<button>
							  				<NavLink to='/dashboard/notification' className={({ isActive}) => isActive ? 'submenu-active-3' : ''}>Notification</NavLink>
										</button>
										
					  				</div>
					 			 	
					  				)}
					  			
						</div>
							
					
				</div>
		 
		 

				<div className='sidebar-bottom'>
					
						<NavLink to='/dashboard/settings'>
							<button>
								<img src={setting} alt='a settings icon'  className='dashboard-icon' />
									Settings
							</button>
						</NavLink>
					
						<NavLink to='/dashboard/logout' >
							<button>
								<img src={logout} alt='a logout icon' className='dashboard-icon' />
									Logout
							</button>
						</NavLink>
				</div>
			</div>
			
		</nav>
  )
}



export default SideBar