import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../../components/Overview/overview.css";
import { PortfolioTableData } from "./PorfolioTableData";
import lessthan from "../../../../../Images/Dashboard/lessthan.svg";
import greaterthan from "../../../../../Images/Dashboard/greaterthan.svg";
import FilledBtn from "../../../../../components/Button/FilledBtn";

const PortfolioPaginationTable = ({ data, totalCount }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [dataPerPage] = useState(5);

  const [isActive, setIsActive] = useState(false);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsActive(!isActive);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/customerpage");
  };

  return (
    <div className="table-wrapper">
      <div className="performance-wrapper">
        <h3>Portfolio Overview</h3>
        <FilledBtn title={"Download"} />
      </div>
      <table>
        <thead>
          <tr className="table-head-container">
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              onClick={handleClick}
              className="table-body-container"
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
              <td className={`${item.status}`}>
                <button>{item.status}</button>
              </td>
            </tr>
          ))}
        </tbody>
        {PortfolioTableData.length > dataPerPage && (
          <tfoot className="pagination-wrapper">
            <tr>
              <td colSpan="6">
                <ul className="pagination">
                  <div className="left-paginate">
                    <li className="paginate">
                      <a href="/">View all Loan history</a>
                    </li>
                  </div>
                  <div className="right-paginate">
                    <li>
                      <img
                        src={greaterthan}
                        alt="a less than icon"
                        className="paginate-img"
                      />
                    </li>
                    {Array.from({
                      length: Math.ceil(totalCount / dataPerPage),
                    }).map((_, index) => (
                      <li key={index}>
                        <button
                          className={`paginate-btn ${
                            currentPage === index + 1 ? "button-active" : ""
                          }`}
                          onClick={() => {
                            paginate(index + 1);
                          }}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    <li>
                      {" "}
                      <img
                        src={lessthan}
                        alt="a greater than icon"
                        className="paginate-img"
                      />
                    </li>
                  </div>
                </ul>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default PortfolioPaginationTable;
