import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import CashFlow from "./CashFlow";
import Speed from "./Speed";
import Behavioural from "./Behavioural";
import TransactionPatern from "./TransactionPatern";
import Income from "./Income";
import "./Page.css";

const AnalysisPage = () => {
  return (
    <div>
      <div className="analysis-container">
        <div className="header">
          <div className="customerid">
            <h2>Customer's ID: Loan 12342</h2>
          </div>
          <div className="button-header">
            <button className="view">View Statement</button>
            <button className="view">Download</button>
            <button className="date">28/02/2023</button>
          </div>
        </div>
        <nav className="analysis-link">
          {/* <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Cash Flow</a>
            </li>
            <li>
              <a href="#">Income</a>
            </li>
            <li>
              <a href="#">Spend</a>
            </li>
            <li>
              <a href="#">Behavioural</a>
            </li>
            <li>
              <a href="#">Transaction Patterns</a>
            </li>
          </ul> */}
          <Link to="/overview">Overview</Link>
          <Link to="/cashflow">Cash Flow</Link>
          <Link to="/income">Income</Link>
          <Link to="/spend">Spend</Link>
          <Link to="/behavioural">Behavioural</Link>
          <Link to="/transaction">Transaction Pattern</Link>
        </nav>
        <div className="result">
          <p className="result-loan">
            Result of Loan LN12342 Bank statement analysis
          </p>
        </div>
        <div className="overview-grid">
          <div className="overview-1">
            <h3>Result: Passed</h3>
            <p>
              Customer has successfully passed all the required analyses,
              indicating a low risk of default and eligible for loan
              disbursement
            </p>
            <button className="overview-button">View Affordability</button>
          </div>
          <div className="overview-2">
            <h3>Passed</h3>
            <p>
              Customer's income and expenses align favorably with the rules of
              the institution
            </p>
            <button className="overview-button2">Cash Flow Analysis</button>
          </div>
          <div className="overview-2">
            <h3>Passed</h3>
            <p>
              Customer's income and expenses align favorably with the rules of
              the institution
            </p>
            <button className="overview-button2">Income Analysis</button>
          </div>
          <div className="overview-2">
            <h3>Passed</h3>
            <p>
              Customer's financial record demonstrates financial responsibility.
            </p>
            <button className="overview-button2">Spend Analysis</button>
          </div>
          <div className="overview-2">
            <h3>Passed</h3>
            <p>
              Customer's financial conduct demonstrates responsible financial
              habits.
            </p>
            <button className="overview-button2">Behavioural Analysis</button>
          </div>
          <div className="overview-2">
            <h3>Passed</h3>
            <p>
              Customer transaction history indicates consistent and reliable
              financial behavior.
            </p>
            <button className="overview-button2">Transactional Pattern</button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/cashflow" element={<CashFlow />} />
        <Route path="/income" element={<Income />} />
        <Route path="/spend" element={<Speed />} />
        <Route path="/behavioural" element={<Behavioural />} />
        <Route path="/transaction" element={<TransactionPatern />} />
      </Routes>
    </div>
  );
};

export default AnalysisPage;
