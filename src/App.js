import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Website/Home/Home'
import AboutUs from './Pages/Website/AboutUs/AboutUs'
import Pricing from './Pages/Website/Pricing/Pricing'
import Blog from './Pages/Website/Blog/Blog'
import CreateAccount from './Pages/Onboarding/Wendy/CreateAccount'
import AccountVerify from "./Pages/Onboarding/AccountVerification/AccountVerify";
import SecurityQuestion from './Pages/Onboarding/Wendy/SecurityQuestion'
import SuccessfulPage from './Pages/Onboarding/SuccessfulPage/SuccessfulPage'
import Login from './Pages/Onboarding/Wendy/Login'
import CreatePassword from './Pages/Onboarding/CreatePassword/CreatePassword'
import Dashboard from './Pages/Dashboard/DashboardOverview/NewDashboard'
import Portfolio from './Pages/Dashboard/PortfolioAnalysis/Portfolio'
import PasswordVerify from "./Pages/Onboarding/PasswordResetVerification/PasswordVerify";
import Deliquency from './Pages/Dashboard/DeliquencyAnalysis/Deliquency'
import Recovery from './Pages/Dashboard/RecoveryManagement/Recovery'
import Repayment from './Pages/Dashboard/Repayment/Repayment'
import Setting from './Pages/Dashboard/Settings/Setting'
// import SU from './Pages/Onboarding/Wendy/SU'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/create-new-password' element={<CreatePassword />} />
          <Route exact path="/PasswordVerify" element={<PasswordVerify />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/securityQuestion' element={<SecurityQuestion />} />
          <Route exact path='/createAccount' element={<CreateAccount />} />
          <Route exact path="/AccountVerify" element={<AccountVerify />} />
           <Route exact path='/successful' element={<SuccessfulPage />} />
           <Route  path='/dashboard/' element={<Dashboard/>} />
           <Route  path='/portfolio' element={<Portfolio/>} />
           <Route  path='/deliquency' element={<Deliquency/>} />
           <Route  path='/recovery' element={<Recovery/>} />
           <Route  path='/repayment' element={<Repayment/>} />
           <Route  path='/setting' element={<Setting/>} />
           {/* <Route  path='/su' element={<SU/>} /> */}
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;