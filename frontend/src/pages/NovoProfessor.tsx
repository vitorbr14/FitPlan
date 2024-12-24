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
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { novo_professor_type } from "@/types/types";

export const NovoProfessor = () => {
  const [formIndex, setFormIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof novo_professor_type>>({
    resolver: zodResolver(novo_professor_type),
  });

  async function onSubmit(values: z.infer<typeof novo_professor_type>) {
    try {
      // Criar o usuário no Firebase
      setLoading(true);
      const newProfessor = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const professor = newProfessor.user;
      console.log("deu certo");

      // Quando o usuário é criado com sucesso no firebase,
      // Tem que criar no banco de dados, usando o ID do firebase
      // E tratar o erro tbm!

      try {
        const createProfessorDB = await axios.post(
          `${import.meta.env.VITE_API_URL}dashboard/newprofessor`,
          {
            id: professor.uid, //
            nome: values.nome,
            email: values.email,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("jwt")}`,
            },
          }
        );

        toast.success("Professor criado com sucesso!");
      } catch (error) {
        await deleteUser(professor);
        console.log("deu pau no bd");
      }
    } catch (authError) {
      toast.error("E-mail já em uso.", {
        description:
          "O e-mail já está sendo usado por outro professor, escolha outro e-mail.",
      });
    } finally {
      setLoading(false);
    }
  }

  // async function onSubmit(values: z.infer<typeof novo_professor_type>) {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       values.email,
  //       values.password
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div className="md:flex md:justify-center  px-4">
      <Link to="/dashboard/professores">Voltar</Link>
      <div className="md:w-4/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 bg-slate-50">
        <div>
          <h1 className="text-xl font-semibold">Novo Professor</h1>

          <section className="py-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {formIndex === 1 && (
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

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirmar Senha</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {formIndex === 2 && <h1>dois</h1>}

                <Button type="submit" disabled={loading}>
                  {loading ? <LoadingSpinner /> : "Novo Professor"}
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};
