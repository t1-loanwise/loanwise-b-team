import React from "react";
import "./SecurityPrivacy.css";

const SecurityPrivacy = () => {
  return (
    <div className="securityPrivacy">
      <div className="prevPass passFlex">
        <h3 htmlFor="Password">Previous Password</h3>
        <input type="password" />
      </div>
      <div className="prevPass passFlex">
        <h3 htmlFor="Password">Previous Password</h3>
        <input type="password" />
      </div>
      <div className="prevPass passFlex">
        <h3 htmlFor="Password">Previous Password</h3>
        <input type="password" />
      </div>
      <div className="textToggle passFlex">
        <h3>Two factor authentication</h3>
        <div className="toggle"></div>
      </div>
      <div className="changeSec"></div>
      <div className="textToggle passFlex">
        <h3>Use security question for sign-in</h3>
        <div className="toggle"></div>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
