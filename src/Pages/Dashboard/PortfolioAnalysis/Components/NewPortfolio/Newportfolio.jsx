import React, { useState } from "react";
import "./Newportfolio.css";
import addition from '../../../../../Images/Auth/addition.svg'
import { NavLink } from "react-router-dom";

export const Newportfolio = () => {

  const [dropMenu, setDropMenu] = useState(false)

  const dropMenuToggle = () => {
     setDropMenu((previousState) => !previousState) 
  }


  return ( 
   
      <div className="btnclass">
          <div className={`dropdown ${dropMenu ? "show-dropdown" : ""}`}>
        <button className="btn" onClick={dropMenuToggle}>
          <img src={addition} alt="" />
          New Portfolio
        </button>

          {dropMenu ? ( <ul className={`dropdown-menu ${dropMenu ? "show-dropdown" : ' '}`}>
        
          <li>
          <NavLink activeclassName="active" to="/dashboard/portfolio/personal">
            <p className="dropdown-nav">Personal</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassName="active" to= "/dashboard/portfolio/business">
            <p className="dropdown-nav">Business</p>
          </NavLink>
        </li>
        </ul>) : " "}
        
        </div>
      </div>
   
  );
};
