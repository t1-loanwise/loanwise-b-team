import React from "react";
import FilledBtn from "../../../components/Button/FilledBtn";
import ComingSoon from "../../../Images/ComingSoon.svg"
import "./Blog.css";

const Blogtext = () => {
  return (
    <div className="text">
      <img src={ComingSoon} alt=""/>
      <h2>
        Get Notified When Our Blog Launches
      </h2>

      <div className="padding">
        <input type="text" placeholder="Enter your email" className="input"/>
        <FilledBtn title={"Notify Me"} />
      </div>

      <p>We would not spam you, don’t worry.</p>
    </div>
  );
};

export default Blogtext;
