import React from "react";
import "./PortInput.css";
import downArrow from "../../../../Images/Dashboard/downarrowbg.svg";
import searchIcon from "../../../../Images/Dashboard/search-normal.svg";

export const Boxes = () => {
  return (
    <div className="inputflex">
      <fieldset>
        <input type="text" placeholder="Select customer ID"></input>
        <img src={searchIcon} alt="" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="Select customer Category"></input>
        <img src={downArrow} alt="" />
      </fieldset>
    </div>
  );
};
