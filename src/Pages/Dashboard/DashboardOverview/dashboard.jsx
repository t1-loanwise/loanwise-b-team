import React from 'react'
import DashboardPages from './DashboardPages'
import DashboardHeader from '../../../components/SideBar/DashboardHeader.jsx'
import SideBar from '../../../components/SideBar/SideBar.jsx'
import './dashboard.css'



const Dashboard = () => {
  return (
   
    <div className='dashboard-wrapper'>
    	<DashboardHeader />
    
    	<div className='dashboard-body'>
        	<SideBar />
			<DashboardPages/>
    	</div>
    </div>
    
   
      
  
  )
}

export default Dashboard;