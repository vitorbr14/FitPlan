import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlunoPerfilFinanceiroRow } from "./AlunoPerfilFinanceiroRow";
import { BtnTabela } from "../BtnTabela";

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

export const AlunoPerfilFinanceiroTable = () => {
  return (
    <div className="relative">
      <BtnTabela label=" Nova Cobrança" />
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
