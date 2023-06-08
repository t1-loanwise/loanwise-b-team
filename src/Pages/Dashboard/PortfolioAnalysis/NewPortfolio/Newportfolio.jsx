import React from "react";
import "./Newportfolio.css";
import addition from "../../../../Images/Auth/addition.svg";

export const Newportfolio = () => {
  return (
    <div>
      <div className="btnclass">
        <button className="btn">
          <img src={addition} alt="" />
          New Portfolio
        </button>
      </div>
    </div>
  );
};
