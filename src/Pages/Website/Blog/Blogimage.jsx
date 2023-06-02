import React from "react";
import background from "../../../Images/Ellipse 36.svg";
import girlImage from "../../../Images/girlImage.svg";
import "./Blog.css";

export const Blogimage = () => {
  return (
    <div className="Blogimages">
      <img src={background} alt="" />
      <img src={girlImage} alt="" />
    </div>
  );
};
