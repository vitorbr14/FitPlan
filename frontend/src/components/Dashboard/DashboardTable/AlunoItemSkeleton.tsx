import React from "react";
import { Skeleton } from "../../ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";
import { Button } from "../../ui/button";

export const AlunoItemSkeleton = () => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium w-2/4">
          <div>
            <div className="flex">
              <div>
                <Skeleton className="w-[42px] h-[42px] rounded-full" />
              </div>
              <div className="pl-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[70px] h-[12px] rounded-full" />
                  <Skeleton className="w-[110px] h-[12px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <div className="mt-6 pl-2">
          <Skeleton className="w-[110px] h-[12px] rounded-full" />
        </div>
        <TableCell>
          <Skeleton className="w-[70px] h-[35px] " />
        </TableCell>
      </TableRow>
    </>
  );
};
