import React from "react";
import { Container } from "../layout/Container";
import DashboardUserInfo from "./DashboardUserInfo";

import DashboardNavbarMenu from "./DashboardNavbarMenu";
import { useAuth } from "@/contexts/AuthContext";

export const DashboardNavbar = () => {
  const { user } = useAuth();
  return (
    <div className="bg-blue-600 py-5 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="pr-4">
              <h1 className="text-white text-2xl font-bold">Logo</h1>
            </div>
            <div className="hidden md:flex">
              <DashboardNavbarMenu />
            </div>
            <h1 className="text-white">{user?.email}</h1>
          </div>

          <div>
            <DashboardUserInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};
