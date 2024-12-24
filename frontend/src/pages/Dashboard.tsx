import { DashboardNavbar } from "@/components/Dashboard/DashboardNavbar";
import { MobileMenu } from "@/components/Dashboard/MobileMenu";
import SideMenu from "@/components/layout/SideMenu";

import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="pb-10">
        <SideMenu />
        <DashboardNavbar />
      </div>
      <Outlet />
    </>
  );
};
