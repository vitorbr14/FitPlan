import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BtnTabela } from "../BtnTabela";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { MatriculaPagamento } from "./NovaMatricula/MatriculaPagamento";
import { Button } from "@/components/ui/button";

import { NovaMatriculaPlanos } from "./NovaMatricula/NovaMatriculaPlanos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LoadingSpinner } from "@/components/ui/loading";
import { useParams } from "react-router-dom";
import { Matricula } from "@/types/types";
import Cookies from "js-cookie";
import { MatriculaTabelaSkeleton } from "./NovaMatricula/MatriculaTabelaSkeleton";
import { formatarData } from "@/utils/formatDate";
export const planoSchema = z.object({
  plano: z.string(),
  inicio_matricula: z.date({ required_error: "Escolha a data de inicio." }),
});

export const MatriculaTabela = () => {
  const queryClient = useQueryClient();

  let { id: id_aluno_url } = useParams();
  const form = useForm<z.infer<typeof planoSchema>>({
    resolver: zodResolver(planoSchema),
    defaultValues: {},
  });

  // Função que pega as matriculas da API
  const getMatriculaFromAluno = async (
    id: string
  ): Promise<Matricula[] | undefined> => {
    const fetchMatricula = await axios.get(
      `${import.meta.env.VITE_API_URL}aluno/matricula/${id}`,
      { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
    );

    return fetchMatricula.data;
  };

  type add_nova_matricula_type = {
    aluno_id: number;
    academia_id: number;
    plano_id: number;
    inicio: any;
    status: boolean;
  };

  // Submit do formulário e mandando para a API.
  async function onSubmit(values: z.infer<typeof planoSchema>) {
    const novaMatricula = {
      aluno_id: Number(id_aluno_url),
      academia_id: 9, // De novo, o ID da academia tem que ser passado de forma dinamica!
      plano_id: Number(values.plano),
      inicio: values.inicio_matricula,
      status: true,
    };

    add_nova_matricula(novaMatricula);
  }

  //GET MATRICULA DA API
  const { data: matricula_aluno } = useQuery({
    queryKey: ["matricula", id_aluno_url],
    queryFn: () => getMatriculaFromAluno(id_aluno_url ?? "id_default"),
  });

  // Função que adiciona para a API
  const {
    mutate: add_nova_matricula,
    error,
    isPending,
  } = useMutation({
    mutationFn: (novaMatricula: add_nova_matricula_type) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}aluno/novaMatricula`,
        novaMatricula,
        { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["matricula", id_aluno_url] });
      toast.success("Matrícula adicionada com sucesso!");
    },
    onError: () => {
      toast.error("Ah não, algo deu errado!", {
        description: "Deu ruim!",
      });
    },
  });

  // exibir enquanto aluno_matricula for undefined
  if (!matricula_aluno) {
    return <MatriculaTabelaSkeleton />;
  }

  return (
    <>
      <Toaster richColors />

      <div className="relative">
        <Dialog>
          <DialogTrigger>
            <BtnTabela label=" Nova Matrícula" />
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Adicionar nova matrícula.</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <span className="font-semibold">Tipo de plano:</span>
                  <div className="py-4 ">
                    <NovaMatriculaPlanos form={form} />
                  </div>
                </div>

                <div>
                  <span className="font-semibold">
                    Informações da matrícula:
                  </span>
                  <div className="pt-4">
                    <MatriculaPagamento form={form} />
                  </div>

                  <div className="flex py-4">
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="w-[10em]"
                        disabled={isPending}
                      >
                        {isPending ? <LoadingSpinner /> : "Concluir Matrícula"}
                      </Button>
                      <DialogClose asChild>
                        <Button type="button" variant="destructive">
                          Cancelar
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </div>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[250px]">Modalidade</TableHead>
              <TableHead>Matrícula</TableHead>

              <TableHead>Periodicidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          {matricula_aluno.length === 0 && (
            <div className="py-5">
              <h1>Aluno não está matriculado!</h1>
            </div>
          )}

          {matricula_aluno.length > 0 &&
            matricula_aluno.map((matricula) => (
              <TableRow key={matricula.id}>
                <TableCell className="font-medium">Musculação</TableCell>
                <TableCell>{formatarData(matricula.inicio)}</TableCell>
                <TableCell>{matricula.plano.plano}</TableCell>
                <TableCell>
                  {matricula.status && <Badge>Ativa</Badge>}
                </TableCell>
                <TableCell className="text-right">
                  {matricula.plano.plano_price} R$
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="secondary">Editar</Button>
                </TableCell>
              </TableRow>
            ))}
        </Table>
      </div>
    </>
  );
};
