
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home/Home'
// import AboutUs from './Pages/AboutUs/AboutUs'
// import Pricing from './Pages/Pricing/Pricing'
// import Blog from './Pages/Blog/Blog'
import './App.css';
// import CreatePassword from './Pages/Authentication/CreatePassword/CreatePassword'
// import Login from './Pages/Authentication/Login'
// import SecurityQuestion from './Pages/Authentication/SecurityQuestion'
import CreateAccount from './Pages/Authentication/Register/CreateAccount';
// import EmailVerify from './Pages/Authentication/EmailVerify/EmailVerify';




function App() {

  return (
    <div className="App">
      <CreateAccount />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/Register' element={<CreateAccount/>} />
          <Route exact path='/create-new-password' element={<CreatePassword/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/security-question' element={<SecurityQuestion/>} />
          <Route exact path='/EmailVerify' element={<EmailVerify/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}


export default App;
