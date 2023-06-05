import React from 'react'
import {Route,Routes} from 'react-router-dom'
import DashboardOverview from './DashboardOverview'
import Portfolio from '../PortfolioAnalysis/Portfolio'
import Repayment from '../Repayment/Repayment'
import Recovery from '../RecoveryManagement/Recovery'
import Deliquency from '../DeliquencyAnalysis/Deliquency'
import Settings from '../Settings/Setting'
import LogOut from '../LogOut/LogOut'
import Message from '../Message/Message'
import UserProfile from '../UserProfile/UserProfile'
import Notification from '../Notification/Notification'






const DashboardPages = () => {
  return (
		<Routes>
			  	<Route index  path='/overview' element={<DashboardOverview/>} />
			  	<Route  path='/portfolio-analysis' element={<Portfolio />} />
			  	<Route  path='/repayment' element={<Repayment />} />
			  	<Route  path='/recovery-management' element={<Recovery/>} />
			  	<Route  path='/deliquency-analysis' element={<Deliquency />} />
				<Route  path='/settings' element={<Settings />} />
		  		<Route path='/logout' element={<LogOut />} />
		  		<Route path='/message' element={<Message />} />
		  		<Route path='/user-profile' element={<UserProfile />} />
		  		<Route  path='/notification' element={<Notification/>} />
		</Routes>
    
  )
}

export default DashboardPages