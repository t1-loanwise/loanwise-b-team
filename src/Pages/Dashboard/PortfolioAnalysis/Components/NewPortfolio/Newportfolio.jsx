import React, { useState } from "react";
import "./Newportfolio.css";
import addition from '../../../../../Images/Auth/addition.svg'
import { NavLink, useNavigate } from "react-router-dom";

export const Newportfolio = () => {

const navigate = useNavigate()

  const handleClick = () => {
    navigate("/personal")
  }


  return ( 
   
      <div className="btnclass">
         
        <button className="btn" onClick={handleClick}>
          <img src={addition} alt="" />
          New Portfolio
        </button>

        
          
       
      </div>
   
  );
};
