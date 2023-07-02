import React, { useState } from "react";
import FilledBtn from "../../../../components/Button/FilledBtn";
import TransparentBtn from "../../../../components/Button/TransparentBtn";
import Icon2 from "../../../../Images/Dashboard/sort.svg";
import dateArrow from "../../../../Images/Dashboard/datearrow.svg";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from "../../../../components/Overview/SearchBar";
import "../dashboard.css";
import DashboardFilter from "../../../../components/Overview/DashboardFilter";

const DashSearch = ({ handleSearch }) => {
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
        <div className="dash__searchFilter">
          <SearchBar handleSearch={handleSearch} />
          <DashboardFilter />
          
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

        {/* <div className="dash__date">
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
        </div> */}
      
    </div>
  );
};

export default DashSearch;
