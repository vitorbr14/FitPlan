import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlunoPerfilFinanceiroRow } from "./AlunoPerfilFinanceiroRow";
import { BtnTabela } from "../BtnTabela";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NovaCobrança } from "./NovaCobranca/NovaCobrança";

import { Form } from "@/components/ui/form";
import dayjs from "dayjs";

export type Cobrança = {
  dataVencimento: string;
  referencia: string;
  status: string;
  valor: number;
};
const cobrancas: Cobrança[] = [
  {
    dataVencimento: "20",
    referencia: "Julho",
    status: "Aberta",
    valor: 90,
  },
  {
    dataVencimento: "20",
    referencia: "Junho",
    status: "Vencida",
    valor: 90,
  },
  {
    dataVencimento: "20",
    referencia: "Maio",
    status: "Paga",
    valor: 90,
  },
  {
    dataVencimento: "20",
    referencia: "Abril",
    status: "Paga",
    valor: 90,
  },
  {
    dataVencimento: "20",
    referencia: "Março",
    status: "Paga",
    valor: 90,
  },
  {
    dataVencimento: "20",
    referencia: "Fevereiro",
    status: "Paga",
    valor: 90,
  },
];

export const cobrancaSchema = z.object({
  plano_option: z.enum(["plano_1", "plano_2", "plano_3"], {
    required_error: "Escolha uma opção de plano.",
  }),
  plano_inicio: z.date({
    required_error: "Por favor, coloque o ínicio da cobrança.",
  }),
});

export const AlunoPerfilFinanceiroTable = () => {
  const form = useForm<z.infer<typeof cobrancaSchema>>({
    resolver: zodResolver(cobrancaSchema),
  });

  function onSubmit(data: z.infer<typeof cobrancaSchema>) {
    if (data.plano_option === "plano_1") {
      console.log("plano 1");
      const newObj = {
        ...data,
        vencimento: dayjs(form.getValues("plano_inicio"))
          .add(1, "month")
          .format(),
      };
      console.log(newObj);
      form.resetField("plano_inicio");
    }
    if (data.plano_option === "plano_2") {
      console.log("plano 1");
      const newObj = {
        ...data,
        vencimento: dayjs(form.getValues("plano_inicio"))
          .add(6, "month")
          .format(),
      };
      console.log(newObj);
    }

    if (data.plano_option === "plano_3") {
      console.log("plano 1");
      const newObj = {
        ...data,
        vencimento: dayjs(form.getValues("plano_inicio"))
          .add(1, "year")
          .format(),
      };
      console.log(newObj);
    }
  }

  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger>
          <BtnTabela label=" Nova Cobrança" />
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <NovaCobrança
                control={form.control}
                getValues={form.getValues}
                watch={form.watch}
              />

              <Button type="submit">Nova Cobrança</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>Todas as cobranças do John Doe.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Referencia</TableHead>
            <TableHead className="w-[250px]">Dia Vencimento</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="text-right">Valor</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cobrancas.map((cobranca) => {
            return <AlunoPerfilFinanceiroRow props={cobranca} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};
