import React, { useState } from "react";
import Notification from "./Notifications/Notification";
import SecurityPrivacy from "./Security-Privacy/SecurityPrivacy";
import DashboardRule from "./Dashboard-Rule/DashboardRule";
import "../Settings/Setting.css";
import Settingtoggle from "./Settingtoggle";

const Setting = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const toggleItems = [
    {
      key: 1,
      header: "Predictive Model",
      subHeader: "Set and edit new or old load default analysis rule ",
      showItems: <Notification />,
    },
    {
      key: 2,
      header: "Notifications",
      subHeader: "Control alerts and notification settings",
      showItems: <SecurityPrivacy />,
    },
    {
      key: 3,
      header: "Security & Privacy ",
      subHeader: "Protect your account with maximum security",
      showItems: <DashboardRule />,
    },
    {
      key: 4,
      header: "User Preference",
      link: "/",
    },
  ];
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          {toggleItems.map((item, index) => {
            return (
              <div key={index}>
                <Settingtoggle
                  header={item.header}
                  subHeader={item.subHeader}
                  showItems={item.showItems}
                  link={item.link}
                  activeKey={item.key}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Setting;
