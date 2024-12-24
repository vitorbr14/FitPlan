import React, { PropsWithChildren } from "react";

// 'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }

export const ContainerLanding = ({ children }: PropsWithChildren) => {
  return <div className="container  2xl:mx-24 xl:mx-24 ">{children}</div>;
};
