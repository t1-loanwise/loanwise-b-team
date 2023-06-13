import React from "react";
import "./Settingtoggle.css";
import arrow from "../../../Images/arrrow.svg";

const Settingtoggle = ({ header, subHeader, showItems }) => {
  const [isShow, setShow] = React.useState(false);

  const handleToggle = () => {
    setShow(!isShow);
    console.log("clicked");
  };

  return (
    <div className="Container">
      <div className="toggleContainer" onClick={handleToggle}>
        <div className="toggle-title">
          <h1>{header}</h1>
          <p>{subHeader}</p>
        </div>
        {isShow ? (
          <img src={arrow} alt="arrow" style={{ transform: "rotate(90deg)" }} />
        ) : (
          <img src={arrow} alt="arrow" />
        )}
      </div>

      {isShow && showItems}
    </div>
  );
};

export default Settingtoggle;
