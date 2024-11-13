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
import { novo_professor_type } from "@/types/types";

export const NovoProfessor = () => {
  const [formIndex, setFormIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const { user: usuario } = useAuth();

  const form = useForm<z.infer<typeof novo_professor_type>>({
    resolver: zodResolver(novo_professor_type),
  });

  async function onSubmit(values: z.infer<typeof novo_professor_type>) {
    try {
      // Criar o usuário no Firebase
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user; // Obtenha a referência do usuário

      try {
        // Tentar inserir no banco de dados
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}dashboard/newprofessor`,
          {
            id: user.uid, // Use user.uid para obter o ID do usuário criado
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
      } catch (dbError) {
        await deleteUser(user);

        toast.error("Algo deu errado!", {
          description: "Tente novamente mais tarde.",
        });
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
  return (
    <div className="flex justify-center ">
      <Toaster richColors />

      <div className="w-4/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 bg-slate-50">
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
