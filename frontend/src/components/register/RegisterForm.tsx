import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "../ui/button";
import axios from "axios";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { RegisterHeader } from "./RegisterHeader";
import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
import { LoadingSpinner } from "../ui/loading";

const registerSchema = z.object({
  nome_admin: z
    .string()
    .min(4, "Por favor, insira um nome com mais de 5 caractéres.")
    .max(50),
  email: z.string().email(),
  password: z.string().min(6).max(30),
});

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [adminInfo, setAdminInfo] = useState<string>("");
  const [admin_id, setAadmin_id] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const nextStep = () => {
    setCurrentIndex(currentIndex + 1);
  };

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    //!! CRIAR PROFESSOR COM ID dE ADM
    setLoading(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // Criar usuario no banco de dados
        axios
          .post(`${import.meta.env.VITE_API_URL}auth/admin`, {
            id: user.uid,
            nome: values.nome_admin,
            email: values.email,
          })
          .then(function (response) {
            nextStep();
            setAdminInfo(values.nome_admin);
            setAadmin_id(user.uid);
          })
          .catch(function (error) {
            const deleteUser = user.delete();
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        if (errorCode === "auth/email-already-in-use") {
          toast.error("E-mail já em uso", {
            description: "Por favor, escolha um e-mail diferente",
          });
        } else {
          toast.error("Algo deu errado, tente novamente mais tarde.");
        }
        // ..
      })
      .finally(() => {
        setLoading(false);
      });
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
              <Button type="submit" variant="outline" disabled={loading}>
                {loading ? <LoadingSpinner /> : "Avançar"}
              </Button>
            </div>
          </form>
        </Form>
      )}

      {currentIndex === 2 && (
        <div className=" w-7/12">
          <div className="mb-10 ">
            <RegisterHeader
              header={`Seja bem vindo, ${adminInfo}! 😃`}
              text="Agora insira os dados de sua academia"
            />
          </div>

          {adminInfo && <RegisterGym admin_id={admin_id} />}
        </div>
      )}
    </>
  );
};
