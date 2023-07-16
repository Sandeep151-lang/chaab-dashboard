import React from "react";
import LayoutWrapper from "../Layoutwrapper";
import Content from "../navbar";
import Analytic from "../Analytics";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <LayoutWrapper
        sidebar={<Sidebar />}
        navbar={<Content />}
        children={<Analytic />}
      />
    </>
  );
};

export default Dashboard;
