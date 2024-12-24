import { Badge } from "@/components/ui/badge";

import { BtnTabela } from "../BtnTabela";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditarAlunoForm } from "./EditarAluno/EditarAlunoForm";

export const AlunoInfos = () => {
  return (
    <div className="relative ">
      <Dialog>
        <DialogTrigger>
          <BtnTabela label="Adicionar contatos e endereço" />
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Editar Informações do Aluno</DialogTitle>
          </DialogHeader>

          <EditarAlunoForm />
        </DialogContent>
      </Dialog>

      <h1>Alunos Info</h1>
    </div>
  );
};
