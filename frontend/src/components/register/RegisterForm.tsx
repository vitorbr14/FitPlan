import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "../ui/button";
import axios from "axios";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { RegisterHeader } from "./RegisterHeader";
import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RegisterGym } from "./RegisterGym";

const registerSchema = z.object({
  nome_admin: z
    .string()
    .min(4, "Por favor, insira um nome com mais de 5 caractéres.")
    .max(50),
  email: z.string().email(),
  password: z.string().min(6).max(30),
});

export type TypeAdmin = {
  id: string;
  email: string;
  nome_admin: string;
  role_id: number;
};

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [adminInfo, setAdminInfo] = useState<TypeAdmin | undefined>();
  const nextStep = () => {
    setCurrentIndex(currentIndex + 1);
  };

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const novoAdmin = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await axios
        .post(`${import.meta.env.VITE_API_URL}auth/admin`, {
          id: novoAdmin.user.uid,
          nome_admin: values.nome_admin,
          email: values.email,
          role_id: 1,
        })
        .then(function (response) {
          nextStep();
          setAdminInfo(response.data);
        })
        .catch(function (error) {
          novoAdmin.user.delete();

          toast("Algo deu errado!", {
            description: "Tente novamente mais tarde.",
          });
        });
    } catch (error) {
      toast("Email já está em uso!", {
        description: "Por favor, insira um e-mail diferente.",
      });
    }
  }

  return (
    <>
      <Toaster />
      {currentIndex === 1 && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" h-72 flex justify-center pt-12  2xl:w-2/5 xl:w-3/5 flex-col  "
          >
            <div>
              <div className="mb-10 ">
                <RegisterHeader
                  header="Cadastre sua academia!"
                  text="Você está a um clique de revolucionar a gestão da sua academia."
                />
              </div>

              <div>
                <div className="xl:w-2/4 w-4/5   m-auto">
                  <FormField
                    control={form.control}
                    name="nome_admin"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Nome"
                            {...field}
                            className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                          />
                        </FormControl>

                        <FormMessage className="bg-white" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="xl:w-2/4 w-4/5   m-auto">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="E-mail"
                            {...field}
                            className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                          />
                        </FormControl>

                        <FormMessage className="bg-white" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="xl:w-2/4 w-4/5   m-auto">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Insira sua senha"
                            {...field}
                            className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                          />
                        </FormControl>

                        <FormMessage className="bg-white" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button type="submit" variant="outline">
                Avançar
              </Button>
            </div>
          </form>
        </Form>
      )}

      {currentIndex === 2 && (
        <div className=" w-7/12">
          <div className="mb-10 ">
            <RegisterHeader
              header={`Seja bem vindo, ${adminInfo?.nome_admin}! 😃`}
              text="Agora insira os dados de sua academia"
            />
          </div>

          {adminInfo && <RegisterGym adminInfo={adminInfo} />}
        </div>
      )}
    </>
  );
};
