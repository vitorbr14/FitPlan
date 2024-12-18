import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth } from "@/config/firebase";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingSpinner } from "@/components/ui/loading";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { novo_aluno_type } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const NovoAluno = () => {
  const form = useForm<z.infer<typeof novo_aluno_type>>({
    resolver: zodResolver(novo_aluno_type),
  });

  const { mutate: novo_aluno, isPending } = useMutation({
    mutationFn: (novoAluno: z.infer<typeof novo_aluno_type>) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}dashboard/newaluno`,
        novoAluno,
        { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
      );
    },
    onSuccess: () => toast.success("Aluno criado com sucesso!"),
    onError: () => toast.error("Algo deu errado, tente novamente."),
  });
  console.log(form.formState.errors);
  async function onSubmit(values: z.infer<typeof novo_aluno_type>) {
    novo_aluno(values);
  }

  return (
    <div className="flex justify-center ">
      <div className="w-4/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 bg-slate-50">
        <div>
          <h1 className="text-xl font-semibold">Novo Aluno</h1>

          <section className="py-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <>
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>

                <Button type="submit" disabled={isPending}>
                  {isPending ? <LoadingSpinner /> : "Novo Aluno"}
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};
