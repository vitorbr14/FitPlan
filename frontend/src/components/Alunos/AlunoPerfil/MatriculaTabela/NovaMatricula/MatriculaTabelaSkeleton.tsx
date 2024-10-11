import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const MatriculaTabelaSkeleton = () => {
  return (
    <div>
      <div className="w-full flex justify-end pb-5">
        <Skeleton className="w-[132px] h-[50px]" />
      </div>

      <div>
        <Skeleton className="w-full h-[50px]" />
      </div>
    </div>
  );
};
