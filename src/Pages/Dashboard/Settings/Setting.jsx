// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Notification from "./Notifications/Notification";
import SecurityPrivacy from "./Security-Privacy/SecurityPrivacy";
import DashboardRule from "./Dashboard-Rule/DashboardRule";
import UserPreference from "./User-Preference/UserPreference";
import React, { Component } from 'react'
import {
    Toolbar, Group, SettingsPanel, Switch, Checkbox, CheckboxGroup,
    Radio, RadioGroup, Option, Selection, Input, TextArea
} from 'react-settings-panel'


const Setting = () => {

  handleSubmit = (data) => console.log;

  return (
    <SettingsPanel color={'#728ad8'} onSubmit={this.handleSubmit}>

      <Selection >
        <h1>Notifications</h1>
      <Notification />
      </Selection>

      <Selection >
        <h1>Security & Privacy</h1>
      <SecurityPrivacy />
      </Selection>

      <Selection >
        <h1>Dashboard Rule</h1>
      <DashboardRule />
      </Selection>

      <Selection >
        <h1>User Preference</h1>
      <UserPreference />
      </Selection>
      
    </SettingsPanel>
  )
}

export default Setting;