import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Website/Home/Home'
import AboutUs from './Pages/Website/AboutUs/AboutUs'
import Pricing from './Pages/Website/Pricing/Pricing'
import Blog from './Pages/Website/Blog/Blog'
import './App.css';
import CreatePassword from './Pages/Onboarding/CreatePassword/CreatePassword'
import Login from './Pages/Onboarding/Login/Login'
import SecurityQuestion from './Pages/Onboarding/Login/SecurityQuestion'
import CreateAccount from './Pages/Onboarding/CreateAccount/CreateAccount';
import EmailVerify from './Pages/Onboarding/EmailVerify/EmailVerify';
import SuccessfulPage from './Pages/Onboarding/SuccessfulPage/SuccessfulPage'
import Register from './Pages/Onboarding/Register/Register'
// import Loginn from './Pages/Onboarding/Wendy/Loginn'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/create-new-password' element={<CreatePassword/>} />
          <Route exact path='/login' element={<Login/>} />
          {/* <Route exact path='/Loginn' element={<Loginn/>} /> */}
          <Route exact path='/security-question' element={<SecurityQuestion/>} />
          <Route exact path='/createAccount' element={<CreateAccount/>} />
          <Route exact path='/emailVerify' element={<EmailVerify />} />
          <Route exact path='successful' element={<SuccessfulPage />}  />
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
