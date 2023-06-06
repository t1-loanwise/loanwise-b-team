import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../../Images/Dashboard/dashboard-icon.svg";
import portfolio from "../../Images/Dashboard/portfolio.svg";
import repayment from "../../Images/Dashboard/money-recive.svg";
import recovery from "../../Images/Dashboard/recovery-convert.svg";
import deliquency from "../../Images/Dashboard/deliquency.svg";
import general from "../../Images/Dashboard/book.svg";
import setting from "../../Images/Dashboard/setting-2.svg";
import logout from "../../Images/Dashboard/logout.png";
import greater from "../../Images/Dashboard/greater.svg";

const SideBar = () => {
  const [showGeneral, setShowGeneral] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const showGeneralList = () => {
    setShowGeneral(!showGeneral);
    setIsActive(!isActive);
  };

  const navItems = [
    { name: "Dashboard", image: dashboardIcon, link: "/dashboard/overview" },
    {
      name: "Portfolio Analysis",
      image: portfolio,
      link: "/portfolio",
    },
    { name: "Repayment", image: repayment, link: "/repayment" },
    {
      name: "Recovery Management",
      image: recovery,
      link: "/recovery",
    },
    {
      name: "Deliquency Analysis",
      image: deliquency,
      link: "/deliquency",
    },
  ];

  const navItem = navItems.map((item, index) => (
    <NavLink
      key={index}
      to={item.link}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <div className="link-text">
        <a href={item.link}>
          <img src={item.image} alt="image" className="dashboard-icon" />
        </a>
        <a className="iconText" href={item.link}>
          {item.name}
        </a>
      </div>
    </NavLink>
  ));

  const bottomNavItems = [
    { name: "Settings", image: setting, link: "/dashboard/settings" },
    { name: "Logout", image: logout, link: "/dashboard/logout" },
  ];

  const bottomNavItem = bottomNavItems.map((item, index) => (
    <NavLink
      key={index}
      to={item.link}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <div className="link-text">
        <a href={item.link}>
          <img src={item.image} alt="image" className="dashboard-icon" />
        </a>
        <a className="iconText" href={item.link}>
          {item.name}
        </a>
      </div>
    </NavLink>
  ));

  return (
    <nav>
      <div className="sidebar-wrapper">
        <div className="sidebar-top">
          {navItem}
          <div className="general-wrapper">
            <button
              onClick={showGeneralList}
              className={isActive ? "active" : ""}
            >
              <div className="general">
                <div className="general-right">
                  <img
                    src={general}
                    alt="a general icon"
                    className="dashboard-icon"
                  />
                  <a href="" className="iconText">
                    General
                  </a>
                </div>
                {showGeneral ? (
                  <div>
                    <img
                      src={greater}
                      alt="a general"
                      className="general-icon-rotate"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={greater}
                      alt="a general"
                      className="general-icon"
                    />
                  </div>
                )}
              </div>
            </button>
            {showGeneral && (
              <div className="sub-menu">
                <button>
                  <NavLink
                    to="/dashboard/message"
                    className={({ isActive }) =>
                      isActive ? "submenu-active-1" : ""
                    }
                  >
                    Messages
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/dashboard/user-profile"
                    className={({ isActive }) =>
                      isActive ? "submenu-active-2" : ""
                    }
                  >
                    User Profile
                  </NavLink>
                </button>
                <button>
                  <NavLink
                    to="/dashboard/notification"
                    className={({ isActive }) =>
                      isActive ? "submenu-active-3" : ""
                    }
                  >
                    Notification
                  </NavLink>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="sidebar-bottom">{bottomNavItem}</div>
      </div>
    </nav>
  );
};

export default SideBar;
