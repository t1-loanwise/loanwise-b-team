import React, { useState } from "react";
import FilledBtn from "../../../../components/Button/FilledBtn";
import TransparentBtn from "../../../../components/Button/TransparentBtn";
import Icon2 from "../../../../Images/Dashboard/sort.svg";
import dateArrow from "../../../../Images/Dashboard/datearrow.svg";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";

const DashSearch = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="dash__titleSearch">
      <div className="dash__title">
        <h2>Welcome Tosin,</h2>
        <p>
          Explore insightful analyses and risk assessment to make informed
          lending decisions.
        </p>
      </div>
      <div className="dash__searchFilterDate">
        <div className="dash__searchFilter">
          <fieldset className="dash__search">
            <input type="text" placeholder="Search  for Loans" />
            <FilledBtn title={"Search"} />
          </fieldset>
          <div className="filter">
            <TransparentBtn
              title={"Filter"}
              icon2={Icon2}
              onClick={() => setShowFilter(!showFilter)}
            />
            {showFilter && (
              <div className="list" onClick={() => setShowFilter(!showFilter)}>
                <span>Wendy</span>
                <span>Precious</span>
                <span>Rosheedat</span>
              </div>
            )}
          </div>
          <div className="btnzz">
            <FilledBtn title={"Search"} />
            <div className="filter">
              <TransparentBtn
                title={"Filter"}
                icon2={Icon2}
                onClick={() => setShowFilter2(!showFilter2)}
              />
              {showFilter2 && (
                <div
                  className="list"
                  onClick={() => setShowFilter2(!showFilter2)}
                >
                  <span>Wendy</span>
                  <span>Precious</span>
                  <span>Rosheedat</span>
                </div>
              )}
            </div>
            <div
              className="dash__date-small"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <div className="img-date">
                <img src={dateArrow} alt="date Arrow" />
                <p>{0}</p>
              </div>
              <div className="calender">
                {showCalendar && (
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className="dash__date"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="img-date">
              <img src={dateArrow} alt="date Arrow" />
            </div>
            {showCalendar && (
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                dateFormat="dd/MM/yyyy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSearch;
