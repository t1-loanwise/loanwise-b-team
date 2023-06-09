import React from "react";
import "./predictiveModel.css";
import { BiPlus } from "react-icons/bi";

const Edit = () => {
  return (
    <div className="Edit">
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
        <label>Model Title</label>
      </div>
    </div>
  );
};

export default Edit;
