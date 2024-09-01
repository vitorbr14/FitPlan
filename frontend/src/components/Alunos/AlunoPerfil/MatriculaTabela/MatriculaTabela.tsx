import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BtnTabela } from "../BtnTabela";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const MatriculaTabela = () => {
  return (
    <div className="relative">
      <BtnTabela label=" Nova Matrícula" />
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
