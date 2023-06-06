import React from "react";
import Notification from "./Notifications/Notification";
import SecurityPrivacy from "./Security-Privacy/SecurityPrivacy";
import DashboardRule from "./Dashboard-Rule/DashboardRule";
import UserPreference from "./User-Preference/UserPreference";
import "../Settings/Setting.css";

const Setting = () => {
  return (
    <div className="Wrapper">
      
      <div className="container">
        <div className="content">
          <div>
            <Notification />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div>
            <SecurityPrivacy />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div>
            <DashboardRule />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div>
            <UserPreference />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
