import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { ContainerLanding } from "./ContainerLanding";
import { MenuRotate } from "../Dashboard/MenuRotate";

const navOptions = ["Home", "Sobre", "Vantagens", "Serviços"];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-transparent absolute w-full z-30  py-3">
      <div className="container mx-auto 2xl:px-4 flex justify-between items-center ">
        <h1>FitPlan</h1>
        <ul className="md:flex gap-5 hidden font-semibold">
          {navOptions.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className="flex items-center">
          <Button>Entrar</Button>

          <MenuRotate handleMenu={isOpen} setHandleMenu={setIsOpen} />
        </div>
      </div>
      <div
        className={`bg-slate-100 overflow-hidden transition-height duration-300 ease-in-out  ${
          isOpen ? `h-auto` : "h-0"
        }`}
      >
        <ContainerLanding>
          <ul className="font-semibold">
            {navOptions.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </ContainerLanding>
      </div>
    </div>
  );
};
