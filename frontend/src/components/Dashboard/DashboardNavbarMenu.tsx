import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
const DashboardNavbarMenu = () => {
  type TypemenuOptions = {
    label: string;
    op1: string;
    op2: string;
  };

  const menuOptions: TypemenuOptions[] = [
    {
      label: "Alunos",
      op1: "Todos Alunos",
      op2: "Cadastrar Aluno",
    },
    {
      label: "Professores",
      op1: "Todos Professor",
      op2: "Cadastrar Professor",
    },
  ];

  return (
    <>
      {menuOptions.map((option: TypemenuOptions) => {
        return (
          <Menubar className="bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="focus:bg-transparent text-white focus:text-white cursor-pointer ">
                {option.label}
              </MenubarTrigger>
              <MenubarContent className=" mt-2">
                <MenubarItem>
                  <Link
                    to={`/dashboard/${
                      option.label === "Alunos" ? "alunos" : "professores"
                    }`}
                  >
                    {option.op1}
                  </Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link
                    to={`/dashboard/${
                      option.label === "Alunos" ? "novoaluno" : "novoprofessor"
                    }`}
                  >
                    {option.op2}
                  </Link>
                </MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        );
      })}
    </>
  );
};

export default DashboardNavbarMenu;
