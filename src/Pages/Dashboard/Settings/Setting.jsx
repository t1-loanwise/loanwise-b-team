import React from 'react';
import Notification from "./Notifications/Notification";
import SecurityPrivacy from "./Security-Privacy/SecurityPrivacy";
import DashboardRule from "./Dashboard-Rule/DashboardRule";
import UserPreference from "./User-Preference/UserPreference";



const Setting = () => {

  return (
    <div>

      <div >
        <h1>Notifications</h1>
      <Notification />
      </div>

      <div>
        <h1>Security & Privacy</h1>
      <SecurityPrivacy />
      </div>

      <div >
        <h1>Dashboard Rule</h1>
      <DashboardRule />
      </div>

      <div >
        <h1>User Preference</h1>
      <UserPreference />
      </div>
      
    </div>
  )
}

export default Setting;