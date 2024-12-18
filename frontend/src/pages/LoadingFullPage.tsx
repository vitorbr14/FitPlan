import { LoadingSpinner } from "@/components/ui/loading";
import React from "react";

export const LoadingFullPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};
