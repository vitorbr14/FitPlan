import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { createUserSchema } from "@/types/types";
import { CreateAluno } from "./CreateAluno";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TypeNovoAlunoFormProps = {
  fetchName: string;
};
export const NovoAlunoForm = ({ fetchName }: TypeNovoAlunoFormProps) => {
  const queryClient = useQueryClient();

  //  Formulário para adicionar professor ou aluno
  const novoUserForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      role_id: 1,
    },
  });

  type mutatePost = {
    email: string;
    nome: string;
    role_id: number;
    academia_id: number;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (newAluno: mutatePost) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}dashboard/${
          fetchName === "alunos" ? "newaluno" : "newprofessor"
        }`,
        newAluno
      );
    },
    onSuccess: (newAluno) => {
      queryClient.invalidateQueries({ queryKey: [fetchName] });
      console.log(newAluno);
    },
  });

  async function handleNewAluno(values: z.infer<typeof createUserSchema>) {
    mutate({
      nome: values.nome,
      email: values.email,
      academia_id: 9, // O ID da academia tem que vir de forma dinamica, usando um globla state.
      role_id: fetchName === "alunos" ? 1 : 2, // deicindo se o role_id será de aluno/professor
    });
  }

  return (
    <div className="">
      <div className="">
        <div>
          <>
            <div className="text-xl">
              Cadastrar novo {fetchName === "alunos" ? "aluno" : "Professor"}
            </div>

            <div className="">
              <Form {...novoUserForm}>
                <form onSubmit={novoUserForm.handleSubmit(handleNewAluno)}>
                  <div className="grid grid-cols-12 gap-1  h-auto  items-center">
                    <CreateAluno form={novoUserForm} />
                  </div>
                  <Button type="submit" disabled={isPending}>
                    Avançar
                  </Button>
                </form>
              </Form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
