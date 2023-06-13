import React, { useState } from "react";
import FilledBtn from "../../../../components/Button/FilledBtn";
import TransparentBtn from "../../../../components/Button/TransparentBtn";
import Icon2 from "../../../../Images/Dashboard/sort.svg";
import dateArrow from "../../../../Images/Dashboard/datearrow.svg";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";

const  DashSearch = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const currentDate = selectedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="dash__titleSearch">
     
      <div className="dash__searchFilterDate">
{/*        
          <fieldset className="dash__search">
            <input type="text" placeholder="Search  for Loans" />
            <FilledBtn title={"Search"} />
          </fieldset> */}
        <div className="dash__searchFilter">
        <div className="filter">
            <TransparentBtn
              title={"Filter"}
              icon2={Icon2}
              onClick={() => setShowFilter(!showFilter)}
            />
            {showFilter && (
              <div className="list" onClick={() => setShowFilter(!showFilter)}>
                <span>Default Loans</span>
                <span>Active Loans</span>
                <span>Pending Loans</span>
                <span>Date</span>
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
              // onClick={() => setShowCalendar(!showCalendar)}
            >
              <div
                className="img-date"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <img src={dateArrow} alt="date Arrow" />
                <p>{currentDate}</p>
              </div>
              <div className="calender">
                {showCalendar && (
                  <div className="calender">
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
         
          <div
            className="dash__date"
            // onClick={() => setShowCalendar(!showCalendar)}
          >
            <div
              className="img-date"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <img src={dateArrow} alt="date Arrow" />
              <p>{currentDate}</p>
            </div>
            {showCalendar && (
              <div className="calender">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            )}
          </div>
      </div>
      </div>
   
  );
};

export default DashSearch;
