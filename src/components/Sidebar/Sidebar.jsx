import React from "react";
import logo from "../../images/chablogo.png";
import DashboardIcon from "../../Icons/dashboardIcon";
import TrainingIcon from "../../Icons/trainingIcon";
import NavigationIcon from "../../Icons/navigationIcon";
import TicketIcon from "../../Icons/ticketIcon";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-section">
        <div className="logo-section">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="sidebar-body-section">
          <div className="dashboard-btn">
            <DashboardIcon />
            <p>Dashboard</p>
          </div>
          <div>
            <div className="sidebar-sub-menu">
              <TrainingIcon />
              <p>Training</p>
            </div>
            <div className="sidebar-sub-menu">
              <TicketIcon />
              <p>Users</p>
            </div>
            <div className="sidebar-sub-menu">
              <NavigationIcon />
              <p>Analytics</p>
            </div>
            <div className="sidebar-sub-menu">
              <NavigationIcon />
              <p>My Account</p>
            </div>
            <div className="sidebar-sub-menu">
              <NavigationIcon />
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
