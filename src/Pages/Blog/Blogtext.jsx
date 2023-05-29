import React from "react";
import FilledBtn from "../../components/Button/FilledBtn";
import "./Blog.css";

const Blogtext = () => {
  return (
    <div className="text">
        <h4>Coming Soon</h4>
        <h2>Get Notified We<br/> Our Blog Launches</h2>
        
        <div className="padding">
            <input type='text'/>
            <FilledBtn title={"Notify Me"}/>
        </div>

      <p>We would not spam you, don’t worry.</p>
    </div>
  );
};

export default Blogtext;
