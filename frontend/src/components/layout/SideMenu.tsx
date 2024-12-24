import { useMobileMenu } from "@/store/MobileMenuStore";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
type MenuItem = {
  label: string;
  path: string;
};
const menuItems: MenuItem[] = [
  { label: "Alunos", path: "/dashboard/alunos" },
  { label: "Novo Aluno", path: "/dashboard/novoaluno" },
  { label: "Professores", path: "/dashboard/professores" },
  { label: "Novo Professor", path: "/dashboard/novoprofessor" },
];

const SideMenu = () => {
  const { isOpen, handleIsOpen } = useMobileMenu();
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      handleIsOpen();
    }
  }, [location.pathname]);
  return (
    <div
      className={`bg-blue-700 ${
        isOpen ? "w-[100%]" : "w-[0]"
      } h-screen  transition-all absolute   overflow-hidden flex justify-center items-center z-[50]`}
    >
      <div className="text-center">
        <ul className="text-white text-2xl ">
          {menuItems.map((item) => {
            return (
              <li
                className={`pb-4 ${
                  location.pathname === item.path && "underline disabled"
                } `}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
