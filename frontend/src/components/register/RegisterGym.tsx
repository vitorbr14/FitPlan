import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import axios from "axios";
import { TypeAdmin } from "./RegisterForm";

const newGymSchema = z.object({
  nome_academia: z.string().min(6),
  telefone: z.string().min(6),
  cnpj: z.string(),
});

type RegisterGymProps = {
  adminInfo: TypeAdmin;
};
export const RegisterGym = ({ adminInfo }: RegisterGymProps) => {
  const form = useForm<z.infer<typeof newGymSchema>>({
    resolver: zodResolver(newGymSchema),
  });

  function onSubmit(values: z.infer<typeof newGymSchema>) {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/gym`, {
        nome_academia: values.nome_academia,
        telefone: values.telefone,
        cnpj: values.cnpj,
        admin_id: adminInfo.id,
      })
      .then(function (response) {
        toast("Academia criada com sucesso!");
      })
      .catch(function (error) {
        console.error(error);
        toast("Algo deu errado!", {
          description: "Tente novamente mais tarde.",
        });
      });

    console.log(adminInfo.id)
  }
  return (
    <div>
      <Toaster />
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
            <Button type="submit" variant="outline">
              Cadastrar Academia!
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
