import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../ui/input";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { NovoAlunoForm } from "./NovoAluno/NovoAlunoForm";
import { useSearchAluno } from "@/store/searchAlunoStore";
import { CreateAlunoInfos } from "./NovoAluno/CreateAlunoInfos";
import { Button } from "../ui/button";

export const AlunoTableNavbar = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  const [formIndex, setFormIndex] = useState(1);
  const [aluno_id, setAluno_id] = useState(0);
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
                  <span className="md:block hidden">Adicionar Aluno</span>
                </DialogTrigger>
                <DialogContent className="lg:w-5/12 md:w-full w-11/12 rounded-md">
                  {formIndex === 1 && (
                    <NovoAlunoForm
                      setFormIndex={setFormIndex}
                      setAluno_id={setAluno_id}
                    />
                  )}
                  {formIndex === 2 && <CreateAlunoInfos aluno_id={aluno_id} />}
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
