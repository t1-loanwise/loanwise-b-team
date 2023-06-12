import React, { useState } from "react";
import Settingtoggle from "../Settingtoggle";
import EditPage from "./Edit";
import NewModelPage from "./New";
import "./predictiveModel.css";
import { FaRegEdit } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import FilledBtn from "../../../../components/Button/FilledBtn";

const Notification = () => {
  const [toggleStates, setToggleStates] = useState([
    false, // Bank Statement Name Match
    false, // Behavioral Pattern
    false, // Spending Pattern
    false, // Cash Flow Pattern
  ]);
  const [editStates, setEditStates] = useState([
    false, // Bank Statement Name Match
    false, // Behavioral Pattern
    false, // Spending Pattern
    false, // Cash Flow Pattern
  ]);

  const [model, setModel] = useState(false);

  const toggleBall = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const editModel = (index) => {
    setEditStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const newModel = () => {
    setModel(!model);
  };

  return (
    <>
      <div className="predictiveModel">
        <div className="top">
          <div className="predictiveItem">
            <div className="title">Bank Statement Name Match</div>
            <div className="toggle-edit">
              <div
                className={`toggle ${toggleStates[0] ? "move" : ""}`}
                onClick={() => toggleBall(0)}
              >
                <span className="toggle-ball"></span>
              </div>
              <div className="edit">
                <FaRegEdit
                  color={"#007e99"}
                  onClick={() => editModel(0)}
                  className="editIcon"
                />
                {editStates[0] && <EditPage />}
              </div>
            </div>
          </div>
          <div className="predictiveItem">
            <div className="title">Behavioral Pattern</div>
            <div className="toggle-edit">
              <div
                className={`toggle ${toggleStates[1] ? "move" : ""}`}
                onClick={() => toggleBall(1)}
              >
                <span className="toggle-ball"></span>
              </div>
              <div className="edit">
                <FaRegEdit
                  color={"#007e99"}
                  onClick={() => editModel(1)}
                  className="editIcon"
                />
                {editStates[1] && <EditPage />}
              </div>
            </div>
          </div>
          <div className="predictiveItem">
            <div className="title">Spending Pattern</div>
            <div className="toggle-edit">
              <div
                className={`toggle ${toggleStates[2] ? "move" : ""}`}
                onClick={() => toggleBall(2)}
              >
                <span className="toggle-ball"></span>
              </div>
              <div className="edit">
                <FaRegEdit
                  color={"#007e99"}
                  onClick={() => editModel(2)}
                  className="editIcon"
                />
                {editStates[2] && <EditPage />}
              </div>
            </div>
          </div>
          <div className="predictiveItem">
            <div className="title">Cash Flow Pattern</div>
            <div className="toggle-edit">
              <div
                className={`toggle ${toggleStates[3] ? "move" : ""}`}
                onClick={() => toggleBall(3)}
              >
                <span className="toggle-ball"></span>
              </div>
              <div className="edit">
                <FaRegEdit
                  color={"#007e99"}
                  onClick={() => editModel(3)}
                  className="editIcon"
                />
                {editStates[3] && <EditPage />}
              </div>
            </div>
          </div>
        </div>
        <div className="new-model">
          <FilledBtn
            icon={<BiPlus size={20} />}
            title={"Set new model"}
            onClick={newModel}
          />
          {model && <NewModelPage />}
        </div>
      </div>
    </>
  );
};

export default Notification;
