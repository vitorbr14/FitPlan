import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BtnTabela } from "../BtnTabela";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MatriculaPagamento } from "./NovaMatricula/MatriculaPagamento";
import { Button } from "@/components/ui/button";

import { NovaMatriculaPlanos } from "./NovaMatricula/NovaMatriculaPlanos";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

const planoSchema = z.object({
  plano: z.enum(["plano_1", "plano_2", "plano_3"], {
    required_error: "Escolha uma opção de plano.",
  }),
  inicio_matricula: z.date({ required_error: "Escolha a data de inicio." }),
});

export const MatriculaTabela = () => {
  const form = useForm<z.infer<typeof planoSchema>>({
    resolver: zodResolver(planoSchema),
  });

  function onSubmit(values: z.infer<typeof planoSchema>) {
    console.log(values);
  }

  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger>
          <BtnTabela label=" Nova Matrícula" />
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Adicionar nova matrícula.</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <span className="font-semibold">Tipo de plano:</span>
                <div className="py-4 ">
                  <NovaMatriculaPlanos
                    control={form.control}
                    watch={form.watch}
                  />
                </div>
              </div>

              <div>
                <span className="font-semibold">Informações da matrícula:</span>
                <div className="pt-4">
                  <MatriculaPagamento
                    getValues={form.getValues}
                    control={form.control}
                  />
                </div>

                <div className="flex">
                  <DialogFooter>
                    <Button type="submit">Concluir Matrícula</Button>
                    <DialogClose asChild>
                      <Button type="button" variant="destructive">
                        Cancelar
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[250px]">Modalidade</TableHead>
            <TableHead>Matrícula</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Periodicidade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Musculação</TableCell>
            <TableCell>01.09.2024</TableCell>
            <TableCell>01.09.2025</TableCell>
            <TableCell>Anual</TableCell>
            <TableCell>
              <Badge>Ativa</Badge>
            </TableCell>
            <TableCell className="text-right">600</TableCell>
            <TableCell className="text-right">Editar</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
