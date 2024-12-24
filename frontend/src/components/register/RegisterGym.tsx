import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import { useState } from "react";
import { LoadingSpinner } from "../ui/loading";

const newGymSchema = z.object({
  nome_academia: z.string().min(6),
  telefone: z.string().min(6),
  cnpj: z.string(),
});

type RegisterGymProps = {
  admin_id: string;
};
export const RegisterGym = ({ admin_id }: RegisterGymProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof newGymSchema>>({
    resolver: zodResolver(newGymSchema),
  });

  // Quando o professor é criado no formulario anterior
  // Ele não está relacionado a nenhuma academia,
  // Essa função faz isso.

  const updateProfessor = async (professor_id: string, academia_id: string) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}auth/editprofessor`, {
        professor_id,
        academia_id,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  function onSubmit(values: z.infer<typeof newGymSchema>) {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/gym`, {
        nome_academia: values.nome_academia,
        telefone: values.telefone,
        cnpj: values.cnpj,
      })
      .then(function (response) {
        toast("Academia criada com sucesso!", {
          description: "Você está sendo redirecionado...",
        });
        const gymid = response.data.id;
        console.log(gymid);
        updateProfessor(admin_id, gymid);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch(function (error) {
        console.error(error);
        toast("Algo deu errado!", {
          description: "Tente novamente mais tarde.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div>
      <Form {...form}>
        <form className=" " onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" m-auto  2xl:w-2/5 xl:w-6/12">
            <FormField
              control={form.control}
              name="nome_academia"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nome da Academia"
                      {...field}
                      className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=" m-auto  2xl:w-2/5 xl:w-6/12">
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="CNPJ"
                      {...field}
                      className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=" m-auto  2xl:w-2/5 xl:w-6/12">
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="text-center">
            <Button type="submit" variant="outline" disabled={loading}>
              {loading ? <LoadingSpinner /> : "Cadastrar Academia!"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
