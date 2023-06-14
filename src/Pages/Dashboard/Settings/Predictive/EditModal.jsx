import React from "react";
import "./Predictive.css";
import { BiPlus } from "react-icons/bi";
import downArrow from "../../../../Images/Dashboard/downarrowbg.svg";
import { BiBin } from "react-icons/bi";

const EditModal = () => {
  return (
    <div className="editModal">
      <div className="title">
        <h2>Edit Existing Rule</h2>
        <div className="plus">
          <BiPlus />
        </div>
      </div>
      <p>
        Edit existing rules that loan applications must meet for approval or
        dismissal
      </p>
      <div className="select-section">
        <div>Model Title</div>
        <fieldset>
          <input type="text" placeholder="Select existing rule"></input>
          <img src={downArrow} alt="" />
        </fieldset>
      </div>
      <div className="select-sections">
        <div className="variable">
          <div className="title">Variable</div>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <img src={downArrow} alt="" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <img src={downArrow} alt="" />
          </fieldset>
        </div>
        <div className="operator">
          <div className="title">Operator</div>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <img src={downArrow} alt="" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <img src={downArrow} alt="" />
          </fieldset>
        </div>
        <div className="variable">
          <div className="title">Value</div>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <div className="delete">
              <span>Delete</span>
            </div>
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
            <div className="delete">
              <span>Delete</span>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
