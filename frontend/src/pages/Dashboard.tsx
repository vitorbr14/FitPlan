import { DashboardNavbar } from "@/components/Dashboard/DashboardNavbar";
import { Container } from "@/components/layout/Container";
import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};
