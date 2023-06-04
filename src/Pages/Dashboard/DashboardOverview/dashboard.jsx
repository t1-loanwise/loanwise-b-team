import React from 'react'
import DashSearch from './components/DashSearch'
import LoanAmount from './components/LoanAmount'


const Dashboard = () => {
  return (
    <div className='container'>
      <DashSearch />
      <LoanAmount />
    </div>
  )
}

export default Dashboard