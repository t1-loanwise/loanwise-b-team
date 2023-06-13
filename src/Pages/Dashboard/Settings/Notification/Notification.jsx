import React, { useState } from "react";
import "./Notification.css";
const Notification = () => {
  const [NotificationToggleStates, setNotificationToggleStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleBall = (index) => {
    setNotificationToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="notification">
      <div className="title">
        <div></div>
        <div>
          <p className="right1">In-app Notification</p>
        </div>
        <div>
          <p className="right2">Email Notification</p>
        </div>
      </div>
      <div className="toggleTxts">
        <div className="toggleTxt">
          <div className="toggleTxt-text">
            <p>New Applications</p>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[0] ? "move" : ""}`}
              onClick={() => toggleBall(0)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[1] ? "move" : ""}`}
              onClick={() => toggleBall(1)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="toggleTxts">
        <div className="toggleTxt">
          <div className="toggleTxt-text">
            <p>New Applications</p>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[2] ? "move" : ""}`}
              onClick={() => toggleBall(2)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[3] ? "move" : ""}`}
              onClick={() => toggleBall(3)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="toggleTxts">
        <div className="toggleTxt">
          <div className="toggleTxt-text">
            <p>New Applications</p>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[4] ? "move" : ""}`}
              onClick={() => toggleBall(4)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
          <div className="tog">
            <div
              className={`toggle ${NotificationToggleStates[5] ? "move" : ""}`}
              onClick={() => toggleBall(5)}
            >
              <span className="toggle-ball"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
