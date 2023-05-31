
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Pricing from './Pages/Pricing/Pricing'
import Blog from './Pages/Blog/Blog'
import './App.css';

import CreatePassword from './Pages/Onboarding/CreatePassword/CreatePassword'
import Login from './Pages/Onboarding/Login/Login'
import SecurityQuestion from './Pages/Onboarding/Login/SecurityQuestion'
import CreateAccount from './Pages/Onboarding/CreateAccount/CreateAccount';
import AccountVerify from './Pages/Onboarding/AccountVerification/AccountVerify';
import SuccessfulPage from './Pages/Onboarding/SuccessfulPage/SuccessfulPage'
import Register from './Pages/Onboarding/Register/Register'
// import Loginn from './Pages/Onboarding/Wendy/Loginn'
import PasswordVerify from './Pages/Onboarding/PasswordResetVerification/PasswordVerify';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/Register' element={<CreateAccount/>} />
          <Route exact path='/create-new-password' element={<CreatePassword/>} />
          <Route exact path='/login' element={<Login/>} />
          {/* <Route exact path='/Loginn' element={<Loginn/>} /> */}
          <Route exact path='/security-question' element={<SecurityQuestion/>} />
          <Route exact path='/createAccount' element={<CreateAccount/>} />
          <Route exact path='/AccountVerify' element={<AccountVerify />} />
          <Route exact path='successful' element={<SuccessfulPage />}  />
          <Route exact path='/PasswordVerify' element={<PasswordVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
