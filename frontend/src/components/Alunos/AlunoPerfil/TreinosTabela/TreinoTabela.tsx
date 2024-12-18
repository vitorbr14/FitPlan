import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BtnTabela } from "../BtnTabela";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NovoTreino } from "./NovoTreino/NovoTreino";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { formatarData } from "@/utils/formatDate";
import { SingleTreino } from "./VerTreinos/SingleTreino";
import useCheckMatricula from "@/components/hooks/useCheckMatricula";
import { Toaster } from "@/components/ui/sonner";
type Objetivo = {
  id: number;
  objetivo: string;
};

type Frequencia = {
  id: number;
  frequencia: string;
};

type Treino = {
  id: string;
  aluno_id: number;
  professor_id: string;
  frequencia_id: number;
  objetivo_id: number;
  inicio_treino: string; // ISO 8601 date string
  vencimento_treino: string | null; // nullable ISO 8601 date string
  objetivo: Objetivo;
  frequencia: Frequencia;
};

type Treinos = Treino[];

export const TreinoTabela = () => {
  let { id: id_aluno_url } = useParams();

  const { notMatriculado, toastMatricula } = useCheckMatricula(
    id_aluno_url || ""
  );

  const { data } = useQuery<Treinos>({
    queryKey: ["treinos", id_aluno_url],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}treino/${id_aluno_url}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div className="relative">
      <Dialog>
        {notMatriculado ? (
          <div onClick={toastMatricula}>
            <BtnTabela label=" Novo Treino" />
          </div>
        ) : (
          <DialogTrigger>
            <BtnTabela label=" Novo Treino" />
          </DialogTrigger>
        )}

        <DialogContent className="max-w-4xl">
          <NovoTreino />
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Ficha</TableHead>
            <TableHead>Objetivo</TableHead>

            <TableHead className="text-right">Inicio</TableHead>
            <TableHead className="text-right">Validade</TableHead>

            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((treino: Treino, index: number) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">
                    Ficha #{index + 1}
                  </TableCell>
                  <TableCell>{treino.objetivo.objetivo}</TableCell>

                  <TableCell className="text-right">
                    {formatarData(treino.inicio_treino)}
                  </TableCell>
                  <TableCell className="text-right">
                    {" "}
                    {treino.vencimento_treino
                      ? formatarData(treino.vencimento_treino)
                      : "Sem validade"}
                  </TableCell>

                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger>
                        <Button>Editar</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Ficha de Treino</DialogTitle>
                        </DialogHeader>

                        <SingleTreino id={treino.id} />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
