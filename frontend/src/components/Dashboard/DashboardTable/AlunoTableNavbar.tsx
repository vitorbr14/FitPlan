import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../../ui/input";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { NovoAlunoForm } from "../../Alunos/NovoAluno/NovoAlunoForm";
import { useSearchAluno } from "@/store/searchAlunoStore";
import { CreateAlunoInfos } from "../../Alunos/NovoAluno/CreateAlunoInfos";
import { Button } from "../../ui/button";

type AlunoTableNavbarProps = {
  fetchName: string;
};
export const AlunoTableNavbar = ({ fetchName }: AlunoTableNavbarProps) => {
  const [searchInput, setSearchInput] = useState("");

  const { handleSearch } = useSearchAluno();

  return (
    <>
      <div className="bg-blue-600 p-4 rounded-md mb-2  ">
        <div className="flex justify-between items-center">
          <div className="">
            <div>
              <Dialog>
                <DialogTrigger className="flex items-center text-white hover:text-gray-300 transition-all ">
                  <FaPlus className="text-2xl mr-2" />
                  <span className="md:block hidden">
                    Adicionar Novo{""}
                    {fetchName === "alunos" ? "Aluno" : "Professor"}
                  </span>
                </DialogTrigger>
                <DialogContent className="lg:w-5/12 md:w-full w-11/12 rounded-md">
                  <NovoAlunoForm fetchName={fetchName} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <div className="flex items-center  ">
              <Input
                className="h-6"
                placeholder="Procurar aluno..."
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <FaMagnifyingGlass
                className="text-2xl ml-2 text-white"
                onClick={() => handleSearch(searchInput)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
