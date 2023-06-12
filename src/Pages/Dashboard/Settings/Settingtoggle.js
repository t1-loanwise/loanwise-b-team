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
