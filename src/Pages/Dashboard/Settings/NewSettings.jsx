import React from "react";
import "./Settingtoggle.css";
import arrow from "../../../Images/arrrow.svg";
import { settingData } from "./settingData";

const NewSettings = ({ showItems }) => {
  const [isShow, setIsShow] = React.useState(
    new Array(settingData.length).fill(false)
  );

  const handleToggle = (index) => {
    const updatedIsShow = new Array(settingData.length).fill(false);
    updatedIsShow[index] = !isShow[index];
    setIsShow(updatedIsShow);
  };

  const settingsData = settingData.map((data, index) => (
    <div
      className="toggleContainer"
      onClick={() => handleToggle(index)}
      key={index}
    >
      <div className="toggle-title">
        <h1>{data.header}</h1>
        <p>{data.subHeader}</p>
      </div>
      {index !== settingData.length - 1 && (
        <img
          src={arrow}
          alt="arrow"
          style={{ transform: isShow[index] ? "rotate(90deg)" : "none" }}
        />
      )}
      {isShow && showItems}
      {/* [isShow.length - 1] */}
    </div>
  ));

  return (
    <div className="container">
      <div className="toggleContainers">{settingsData}</div>
    </div>
  );
};

export default NewSettings;

/* 
import React, { useState } from "react";
import "./Settingtoggle.css";
import arrow from "../../../Images/arrrow.svg";
import { useNavigate } from "react-router-dom";

const Settingtoggle = ({
  header,
  subHeader,
  showItems,
  link,
  activeKey,
  setSelectedItem,
  selectedItem,
}) => {
  const [isShow, setShow] = React.useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (link) {
      //navigate to link
      navigate(link);
    } else {
      if (selectedItem) {
        setSelectedItem(activeKey);
        setShow(!isShow);
        console.log(activeKey);
      } else {
        setShow(false);
        setSelectedItem(null);
      }
    }
  };

  return (
    <div className="Container">
      <div className="toggleContainer" onClick={handleToggle}>
        <div className="toggle-title">
          <h1>{header}</h1>
          <p>{subHeader}</p>
        </div>
        {!link &&
          activeKey &&
          selectedItem &&
          (isShow ? (
            <img
              src={arrow}
              alt="arrow"
              style={{ transform: "rotate(90deg)" }}
            />
          ) : (
            <img src={arrow} alt="arrow" />
          ))}
      </div>

      {isShow && activeKey && selectedItem && showItems}
    </div>
  );
};

export default Settingtoggle;

*/
