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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const pessoas = [
  {
    nome: "Carlos Santos",
    email: "carlos.santos@email.com",
    telefone: "(11) 98765-4321",
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    telefone: "(21) 91234-5678",
  },
  {
    nome: "João Pereira",
    email: "joao.pereira@email.com",
    telefone: "(31) 99876-5432",
  },
  {
    nome: "Mariana Costa",
    email: "mariana.costa@email.com",
    telefone: "(41) 98765-4321",
  },
  {
    nome: "Rafael Oliveira",
    email: "rafael.oliveira@email.com",
    telefone: "(51) 91234-5678",
  },
];

const AlunosTable = () => {
  return (
    <Table className="">
      <TableHeader>
        <TableRow className="">
          <TableHead className="">Aluno</TableHead>
          <TableHead className="">Tel</TableHead>
          <TableHead className="">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {pessoas.map((invoice) => (
          <TableRow key={invoice.nome}>
            <TableCell className="font-medium ">
              <div className="flex">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="pl-2">
                  <div className="flex flex-col">
                    <span>{invoice.nome}</span>
                    <span className="text-sm text-gray-500 font-normal">
                      {invoice.email}
                    </span>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>{invoice.telefone}</TableCell>
            <TableCell>
              <Button variant="default">Editar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AlunosTable;
