import React from "react";
import "./layout.css";
import Chart from "../../Images/Auth/Group 8039.svg";
import logo from "../../Images/logo.svg";

const AuthLayout = ({ title, children, subtitle, formFooter }) => {
  const spaceBetween = {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '60%'
  };

  const gap = {
    gap: '25%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '60%'
  };

  const align = {
    justifySelf: 'center'
  };

  return (
    <div className="authContainerWrapper">
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

          <div className="right-side" style={formFooter ? spaceBetween : gap}>
            <div className="right-side-header">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="right-style" style={!formFooter ? align : null}>
              <div className="form-title">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
              </div>
              {children}
            </div>
            {formFooter && <p className="formFooter">{formFooter}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
