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
    op3: string;
  };

  const menuOptions: TypemenuOptions[] = [
    {
      label: "Alunos",
      op1: "Cadastrar Aluno",
      op2: "Todos Alunos",
      op3: "Procurar Aluno",
    },
    {
      label: "Professores",
      op1: "Cadastrar Professor",
      op2: "Todos Professores",
      op3: "Procurar Professor",
    },
    {
      label: "Treinos",
      op1: "Cadastrar Professor",
      op2: "Todos Professores",
      op3: "Procurar Professor",
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
                  <Link to={"/dashboard/alunos"}>{option.op1}</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>{option.op2}</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>{option.op3}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        );
      })}
    </>
  );
};

export default DashboardNavbarMenu;
