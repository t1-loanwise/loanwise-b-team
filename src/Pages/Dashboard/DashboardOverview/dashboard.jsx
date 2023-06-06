import React from 'react'
import DashboardPages from './DashboardPages'
import DashboardHeader from '../../../components/SideBar/DashboardHeader.jsx'
import SideBar from '../../../components/SideBar/SideBar.jsx'
import './dashboard.css'
import DashSearch from '../DashboardOverview/components/DashSearch';
import LoanAmount from './components/LoanAmount'



const Dashboard = () => {
  return (
    <>
    <div className='dashboard-wrapper'>
    <DashboardHeader />
    
    <div className='dashboard-body'>
        <SideBar />
        <DashboardPages/>
    </div>
    </div>
    <div className='container'>
      <DashSearch />
      <LoanAmount /> 
    </div>
   
      <div className='dashboard-wrapper'>
          <DashboardHeader />
          <div className='dashboard-body'>
              <SideBar />
              <DashboardPages/>
          </div>
		</div>
    </>
  
  )
}

export default Dashboard;