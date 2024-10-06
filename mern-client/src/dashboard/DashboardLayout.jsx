import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row">
        <SideBar />

        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
