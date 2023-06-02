import React from "react";
import girlImage from "../../../Images/girlImage.svg";
import Background from "../../Images/Ellipse 36.svg";

import "./Blog.css";

export const Blogimage = () => {
  return (
    <div className="Blogimages">
      <img src={Background} alt="" />
      <img src={girlImage} alt="" />
    </div>
  );
};
