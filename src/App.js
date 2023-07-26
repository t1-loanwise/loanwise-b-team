import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Website/Home/Home";
import AboutUs from "./Pages/Website/AboutUs/AboutUs";
import Pricing from "./Pages/Website/Pricing/Pricing";
import Blog from "./Pages/Website/Blog/Blog";
import CreateAccount from "./Pages/Onboarding/Form Validation/CreateAccount";
import AccountVerify from "./Pages/Onboarding/AccountVerification/AccountVerify";
import ForgotPassword from "./Pages/Onboarding/Form Validation/ForgotPassword";
import ForgotPasswordVerify from "./Pages/Onboarding/Form Validation/ForgotPwdVerify/AccVerify";
import NewPassword from "./Pages/Onboarding/Form Validation/NewPassword";
import SecurityQuestion from "./Pages/Onboarding/Form Validation/SecurityQuestion";
import SuccessfulPage from "./Pages/Onboarding/SuccessfulPage/SuccessfulPage";
import Login from "./Pages/Onboarding/Form Validation/Login";
import NewDashboard from "./Pages/Dashboard/DashboardOverview/NewDashboard";
import UserPreference from "./Pages/Dashboard/Settings/User-Preference/UserPreference";
import ContactForm from "./components/NewForm/ContactForm";
import CreatePersonal from "./Pages/Dashboard/PortfolioAnalysis/Components/NewPortfolio/CreatePersonal/CreatePersonal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/contactForm" element={<ContactForm />} />
          <Route exact path="/securityQuestion" element={<SecurityQuestion />}/>
          <Route exact path="/createAccount" element={<CreateAccount />} />
          <Route exact path="/accountVerify" element={<AccountVerify />} />
          <Route exact path="/accVerify" element={<ForgotPasswordVerify />} />
          <Route exact path="/newPassword" element={<NewPassword />} />
          <Route exact path="/successful" element={<SuccessfulPage />} />
          <Route path="/dashboard/*" element={<NewDashboard />} />
          <Route path="/userPreference" element={<UserPreference />} />
          <Route path="/personal" element={<CreatePersonal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
