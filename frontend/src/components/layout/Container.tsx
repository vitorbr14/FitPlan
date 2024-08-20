import React from "react";

type typeContainer = {
  children: any;
};
export const Container = ({ children }: typeContainer) => {
  return <div className="container mx-auto">{children}</div>;
};
