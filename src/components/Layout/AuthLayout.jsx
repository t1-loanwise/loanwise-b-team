import React from "react";
import "./layout.css";
import Chart from "../../Images/Auth/Group 8039.svg";
// import Chart from "../../Images/Auth/Chart.png";
// import Sum from "../../Images/Auth/Sum.png";
import logo from "../../Images/logo.svg";

const AuthLayout = ({ title, children, subtitle }) => {
  return (
    <div className="auth-container">
      <div className="auth--layout">
        <div className="left-side">
          <img src={Chart} alt="" />
          <div className="left-side_text">
            <p>Make safe and easy decisions</p>
            <p>
              Get insight for credit decision with an in-depth analysis in just
              one click
            </p>
          </div>
        </div>

        <div className="right-side">
          <div className="right-side-header">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="right-style">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;
