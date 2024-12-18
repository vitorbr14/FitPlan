import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlunoPerfilFinanceiroRow } from "./AlunoPerfilFinanceiroRow";
import { BtnTabela } from "../BtnTabela";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NovaCobrança } from "./NovaCobranca/NovaCobrança";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import dayjs from "dayjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Cobrancas, FetchCobrancaResponse, Matricula } from "@/types/types";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import AlunoPerfilFinanceiroTable_Skeleton from "./NovaCobranca/AlunoPerfilFinanceiroTable_Skeleton";
import useCheckMatricula from "@/components/hooks/useCheckMatricula";

export const cobrancaSchema = z.object({
  plano_inicio: z.date({
    required_error: "Por favor, coloque o ínicio da cobrança.",
  }),
  status: z.enum(["PAGO", "ABERTA", "VENCIDA"]),
});

const getCobrancasAluno = async (
  id: string,
  pageNumber: number
): Promise<FetchCobrancaResponse> => {
  const fetchCobranca = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }aluno/cobranca/${id}?skip=${pageNumber}&take=5`,
    { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
  );

  return fetchCobranca.data;
};

export const AlunoPerfilFinanceiroTable = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  let { id: id_aluno_url } = useParams();
  const { notMatriculado, toastMatricula, matricula_aluno } = useCheckMatricula(
    id_aluno_url || ""
  );

  // Pegar o ID da matricula do aluno
  // Caso o aluno n for matriculado, n mostra o botão de cobrancas.

  const form = useForm<z.infer<typeof cobrancaSchema>>({
    resolver: zodResolver(cobrancaSchema),
  });

  const { mutate: add_nova_cobranca } = useMutation({
    mutationFn: ({ data_cobrança, status }: any) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}aluno/cobranca/${id_aluno_url}`,
        { data: { data_cobrança, status } },
        { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cobranças"] });
      toast.success("Cobrança criada com sucesso!");
    },
    onError: () => {
      toast.error("Algo deu errado, tente novamente mais tarde!");
    },
  });

  const { data: cobrancas_aluno, isPending: loading_cobranca } = useQuery({
    queryKey: ["cobranças", id_aluno_url, page],
    queryFn: () => getCobrancasAluno(id_aluno_url ?? "id_default", page),
  });

  function onSubmit(data: z.infer<typeof cobrancaSchema>) {
    console.log(data);
    add_nova_cobranca({
      data_cobrança: data.plano_inicio.toString(),
      status: data.status,
    });
  }

  return (
    <div className="relative">
      <Dialog>
        {notMatriculado ? (
          <div onClick={toastMatricula}>
            <BtnTabela label="Nova Cobrança" />
          </div>
        ) : (
          <DialogTrigger>
            <BtnTabela label="Nova Cobrança" />
          </DialogTrigger>
        )}
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {matricula_aluno && (
                <NovaCobrança
                  form={form}
                  matricula_aluno={matricula_aluno[0]}
                />
              )}

              <Button type="submit">Nova Cobrança</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {notMatriculado ? (
        <h1>Aluno não está matriculado.</h1>
      ) : (
        <Table>
          <TableCaption>Todas as cobranças do John Doe.</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Referencia</TableHead>
              <TableHead className="w-[250px]">Dia Vencimento</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading_cobranca && <AlunoPerfilFinanceiroTable_Skeleton />}
            {cobrancas_aluno &&
              cobrancas_aluno.findAllCobrancas.map((cobranca) => {
                return <AlunoPerfilFinanceiroRow cobranca={cobranca} />;
              })}
          </TableBody>
        </Table>
      )}

      <div className=" flex justify-center py-5">
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1 && true}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === cobrancas_aluno?.paginas && true}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};
