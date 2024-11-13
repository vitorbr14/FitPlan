import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../../ui/input";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { NovoAlunoForm } from "../../Alunos/NovoAluno/NovoAlunoForm";
import { useSearchAluno } from "@/store/searchAlunoStore";
import { CreateAlunoInfos } from "../../Alunos/NovoAluno/CreateAlunoInfos";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

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
            <div className="text-white flex">
              <FaPlus className="text-2xl mr-2" />

              <Link
                to={`/dashboard/${
                  fetchName === "alunos" ? "novoaluno" : "novoprofessor"
                }`}
              >
                {" "}
                <span className="md:block hidden">
                  Adicionar Novo{""}
                  {fetchName === "alunos" ? " Aluno" : " Professor"}
                </span>{" "}
              </Link>
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
