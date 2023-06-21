import React, { useState } from "react";
import Select from "react-select";
import "./Predictive.css";
import { BiPlus } from "react-icons/bi";
import Delete from "../../../../Images/Dashboard/delete.svg";
import FilledBtn from "../../../../components/Button/FilledBtn";

const New = ({ handleShow }) => {
  const variableOptions = [
    {
      value: "Select",
      label: "Select",
    },
    {
      value: "Bank Statement Name Match",
      label: "Bank Statement Name Match",
    },
    {
      value: "Average balance",
      label: "Average balance",
    },
    {
      value: "Greater than",
      label: "Greater than",
    },
    {
      value: "Greater than or equal to",
      label: "Greater than or equal to",
    },
    {
      value: "Equal to",
      label: "Equal to",
    },
    {
      value: "Tally with",
      label: "Tally with",
    },
  ];
  const operatorOptions = [
    {
      value: "Select",
      label: "Select",
    },
    {
      value: "Less than",
      label: "Less than",
    },
    {
      value: "Less than or equal to",
      label: "Less than or equal to",
    },
    {
      value: "Greater than",
      label: "Greater than",
    },
    {
      value: "Account Activity",
      label: "Account Activity",
    },
    {
      value: "Number of Credit Transactions",
      label: "Number of Credit Transactions",
    },
    {
      value: "Number of Debit Transactions",
      label: "Number of Debit Transactions",
    },
    {
      value: "Number of other loan amount",
      label: "Number of other loan amount",
    },
  ];

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontSize: "12px",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      fontSize: "13px",
      fontWeight: "600",
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      fontSize: "13px",
      fontWeight: "600",
    }),
  };

  const [showNewCondition, setShowNewCondition] = useState(false);

  const handleNewCondition = () => {
    setShowNewCondition(true);
  };

  return (
    <div className="editModal">
      {/* Nothing here :( */}
      <form>
        <div className="title">
          <h2>New Rule</h2>
          <div className="plus">
            <BiPlus color="#006980" onClick={handleShow} />
          </div>
        </div>
        <p className="rule-par">
          Edit existing rules that loan applications must meet for approval or
          dismissal
        </p>
        <div className="select-section">
          <div>Model Title</div>
          <fieldset>
            <input type="text" placeholder="Select existing rule"></input>
          </fieldset>
        </div>
        <div className="selections">
          <div className="select-sectionz">
            <div className="select-sections">
              <div className="select-component variable">
                <div className="title">Variable</div>
                <Select
                  className="select"
                  placeholder={"Select question"}
                  options={variableOptions}
                  styles={customStyles}
                />
              </div>
              <div className="select-component variable">
                <div className="title">Operator</div>
                <Select
                  className="select"
                  placeholder={"Select question"}
                  options={operatorOptions}
                  styles={customStyles}
                />
              </div>
              <div className="select-component variable">
                <div className="title">Value</div>
                <fieldset>
                  <input type="text" placeholder="input" />
                </fieldset>
              </div>
            </div>
            <div className="inputDelContainer">
              <div className="inputDel">
                <p>Delete</p>
                <span>
                  <img src={Delete} alt="Delete" width="18px" height="18px" />
                </span>
              </div>
            </div>
          </div>
          <div className="select-sectionz">
            <div className="select-sections">
              <div className="select-component variable">
                <div className="title">Variable</div>
                <Select
                  className="select"
                  placeholder={"Select question"}
                  options={variableOptions}
                  styles={customStyles}
                />
              </div>
              <div className="select-component variable">
                <div className="title">Operator</div>
                <Select
                  className="select"
                  placeholder={"Select question"}
                  options={operatorOptions}
                  styles={customStyles}
                />
              </div>
              <div className="select-component variable">
                <div className="title">Value</div>
                <fieldset>
                  <input type="text" placeholder="input" />
                </fieldset>
              </div>
            </div>
            <div className="inputDelContainer">
              <div className="inputDel">
                <p>Delete</p>
                <span>
                  <img src={Delete} alt="Delete" width="18px" height="18px" />
                </span>
              </div>
            </div>
          </div>
          {showNewCondition && (
            <div className="select-sectionz">
              <div className="select-sections">
                <div className="select-component variable">
                  <div className="title">Variable</div>
                  <Select
                    className="select"
                    placeholder={"Select question"}
                    options={variableOptions}
                    styles={customStyles}
                  />
                </div>
                <div className="select-component variable">
                  <div className="title">Operator</div>
                  <Select
                    className="select"
                    placeholder={"Select question"}
                    options={operatorOptions}
                    styles={customStyles}
                  />
                </div>
                <div className="select-component variable">
                  <div className="title">Value</div>
                  <fieldset>
                    <input type="text" placeholder="input" />
                  </fieldset>
                </div>
              </div>
              <div className="inputDelContainer">
                <div className="inputDel">
                  <p>Delete</p>
                  <span>
                    <img src={Delete} alt="Delete" width="18px" height="18px" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="new-condition">
          <FilledBtn
            icon={<BiPlus size={20} />}
            title={"New Condition"}
            onClick={handleNewCondition}
          />
        </div>
        <div className="termsContainer">
          <div>
            <input type="radio" name="condition" id="condition1" />
            <label htmlFor="condition1">All conditions must be met</label>
          </div>
          <div>
            <input type="radio" name="condition" id="condition2" />
            <label htmlFor="condition2">Any of the conditions can be met</label>
          </div>
        </div>
        <div className="save-New">
          <FilledBtn
            title={"Save"}
            // onClick={newModel}
          />
        </div>
      </form>
    </div>
  );
};

export default New;
