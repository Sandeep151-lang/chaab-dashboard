import React from "react";

const LayoutWrapper = ({ children, navbar, sidebar }) => {
  return (
    <div className="header">
      <div className="sidebar">{sidebar}</div>
      <div className="navbar">
        {navbar}
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
