import { Button } from "@/components/ui/button";
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

export const TreinoTabela = () => {
  return (
    <div className="relative">
      <BtnTabela label=" Novo Treino" />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Ficha</TableHead>
            <TableHead>Objetivo</TableHead>
            <TableHead>Professor</TableHead>
            <TableHead className="text-right">Inicio</TableHead>
            <TableHead className="text-right">Validade</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Ficha #1</TableCell>
            <TableCell>Hipertrofia</TableCell>
            <TableCell>Fulano</TableCell>
            <TableCell className="text-right">01.08.2024</TableCell>
            <TableCell className="text-right">01.10.2024</TableCell>
            <TableCell className="text-right">
              <Badge>Ativo</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button>Editar</Button>
            </TableCell>
          </TableRow>

          <TableRow className="bg-red-100">
            <TableCell className="font-medium">Ficha #2</TableCell>
            <TableCell>Hipertrofia</TableCell>
            <TableCell>Ciclano</TableCell>
            <TableCell className="text-right">24.04.2024</TableCell>
            <TableCell className="text-right">24.07.2024</TableCell>
            <TableCell className="text-right">
              <Badge variant="destructive">Inativo</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button>Editar</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
