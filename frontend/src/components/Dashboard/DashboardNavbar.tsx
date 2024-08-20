import React from "react";
import { Container } from "../layout/Container";
import DashboardUserInfo from "./DashboardUserInfo";

import DashboardNavbarMenu from "./DashboardNavbarMenu";

export const DashboardNavbar = () => {
  return (
    <div className="bg-blue-600 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="pr-4">
              <h1 className="text-white text-2xl font-bold">Logo</h1>
            </div>
            <DashboardNavbarMenu />
          </div>

          <div>
            <DashboardUserInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};
