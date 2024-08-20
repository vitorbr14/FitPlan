import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../ui/input";
export const AlunoTableNavbar = () => {
  return (
    <div className="bg-blue-600 p-4 rounded-md mb-2 ">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center text-white">
            <FaPlus className="text-2xl mr-2" />
            <span>Adicionar Aluno</span>
          </div>
        </div>
        <div>
          <div className="flex items-center  ">
            <Input className="h-6" placeholder="Procurar aluno..." />
            <FaMagnifyingGlass className="text-2xl ml-2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
