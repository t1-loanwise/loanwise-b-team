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
  selected,
}) => {
  const [isShow, setShow] = React.useState(false);
  const [currentToggle, setCurrentToggle] = useState(null);
  const navigate = useNavigate();

  console.log({ selected });
  const handleToggle = () => {
    setCurrentToggle(activeKey);
    setSelectedItem(activeKey);

    if (link) {
      //navigate to link
      navigate(link);
    } else {
      // if (selected) {
      setShow((prevState) => !prevState);
      console.log({ activeKey });
      console.log({ selectedItem });
      console.log({ currentToggle });
      // } else {
      //   setShow(false);
      //   setSelectedItem(null);
      // }
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
          (selected && isShow ? (
            <img
              src={arrow}
              alt="arrow"
              style={{ transform: "rotate(90deg)" }}
            />
          ) : (
            <img src={arrow} alt="arrow" />
          ))}
      </div>
      {/* import Settings from "../Settings/Settings";
      <Route path="/settings" element={<Settings />} /> */}

      {isShow && currentToggle === activeKey && showItems}
      {/* {isShow && selected && showItems} */}
      {/* {isShow && (selected || activeKey === currentToggle) && showItems} */}
    </div>
  );
};

export default Settingtoggle;
