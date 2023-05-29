import React from "react";
import style from "./layout.module.css";
import signup from "../../Images/Auth/signup.svg";
// import Chart from "../../Images/Auth/Chart.png";
// import Sum from "../../Images/Auth/Sum.png";
import logo from "../../Images/logo.svg";

const AuthLayout = ({ title, children, subtitle }) => {
  return (
    <div className="auth-container">
      <header>
        <a href="/Home" className={style["logo"]}>
          <img src={logo} alt="logo" />
        </a>
      </header>

      <div className={style["auth--layout"]}>
        <div className={style["left-side"]}>
          <img src={signup} alt="" />
        </div>

        <div className={style["right-side"]}>
          <div className={style["right-style"]}>
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
