import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { createUserSchema } from "@/types/types";

import { CreateAluno } from "./CreateAluno";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CreateAlunoInfos } from "./CreateAlunoInfos";

type TypeNovoAlunoFormProps = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  setAluno_id: React.Dispatch<React.SetStateAction<number>>;
};
export const NovoAlunoForm = ({
  setFormIndex,
  setAluno_id,
}: TypeNovoAlunoFormProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //  NOVO FORMULARIO

  const novoUserForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      role_id: 1,
      academia_id: 1,
    },
  });

  const userInfosForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
  });

  type mutatePost = {
    email: string;
    nome: string;
    role_id: number;
    academia_id: number;
  };

  const { mutate, isPending, error } = useMutation({
    mutationFn: (newAluno: mutatePost) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}dashboard/newaluno`,
        newAluno
      );
    },
    onSuccess: (newAluno) => {
      queryClient.invalidateQueries({ queryKey: ["alunos"] });
      setAluno_id(newAluno.data.createAluno.id);
    },
  });

  async function handleNewAluno(values: z.infer<typeof createUserSchema>) {
    mutate({
      nome: values.nome,
      email: values.email,
      academia_id: 1,
      role_id: 1,
    });

    setFormIndex(2);
  }
  //  NOVO FORMULARIO

  return (
    <div className="">
      <div>
        <>
          <div className="text-xl">Cadastrar novo aluno</div>

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
  );
};
