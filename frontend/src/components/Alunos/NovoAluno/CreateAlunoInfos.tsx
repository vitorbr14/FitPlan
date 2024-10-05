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
import { novoAlunoContatos } from "@/types/types";
import { Checkbox } from "@/components/ui/checkbox";

type CreateAlunosProps = {
  aluno_id: number;
};
export const CreateAlunoInfos = ({ aluno_id }: CreateAlunosProps) => {
  const form = useForm<z.infer<typeof novoAlunoContatos>>({
    resolver: zodResolver(novoAlunoContatos),
  });

  function onSubmit(values: z.infer<typeof novoAlunoContatos>) {
    const { contato } = values;
    console.log(contato);
  }

  console.log(form.formState.errors);
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <FormField
                control={form.control}
                name="contato.telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-12">
              <div className="">
                <FormField
                  control={form.control}
                  name="contato.iswapp"
                  render={({ field }) => (
                    <FormItem className="flex items-center py-2 ">
                      <FormControl>
                        <Checkbox
                          className="mt-2 mr-2"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="">
                        <span>Esse número é WhatsApp?</span>
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="col-span-12">
              <FormField
                control={form.control}
                name="endereco.rua"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-12">
              <FormField
                control={form.control}
                name="endereco.bairro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-12">
              <FormField
                control={form.control}
                name="endereco.cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-12">
              <FormField
                control={form.control}
                name="contato.aluno_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aluno Id</FormLabel>
                    <FormControl>
                      <Input {...field} value={aluno_id} disabled />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};
