import React from 'react'
import DashSearch from './components/DashSearch'
import LoanAmount from './components/LoanAmount'
import DashboardPages from './DashboardPages'
import DashboardHeader from '../../../components/SideBar/DashboardHeader.jsx'
import SideBar from '../../../components/SideBar/SideBar.jsx'
import './dashboard.css'



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
    </>
  )
}

export default Dashboard;