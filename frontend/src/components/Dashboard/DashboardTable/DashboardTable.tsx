import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Link } from "react-router-dom";

import { AlunoType, FetchDataResponse, ProfessorType } from "@/types/types";
import { Button } from "@/components/ui/button";
import { AlunoItemSkeleton } from "./AlunoItemSkeleton";
type dataTable = {
  data: ProfessorType[] | AlunoType[] | undefined;
  isPending: boolean;
};

const DashboardTable = ({ data, isPending }: dataTable) => {
  return (
    <div>
      <Table className="">
        <TableHeader>
          <TableRow className="">
            <TableHead className="">
              <TableHead className="">Nome</TableHead>
            </TableHead>
            <TableHead className="">Tel</TableHead>
            <TableHead className="">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isPending && <AlunoItemSkeleton />}

          {data &&
            data.map((data_single) => (
              <TableRow key={data_single.id}>
                <TableCell className="font-medium w-2/4">
                  <div className="flex">
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="pl-2">
                      <div className="flex flex-col">
                        <span>{data_single.nome}</span>
                        <span className="text-sm text-gray-500 font-normal">
                          {data_single.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="md:block hidden">
                  {data_single.email}
                </TableCell>
                <TableCell>
                  <Link
                    to={`/dashboard/${
                      data_single.role_id === 1 ? "alunos" : "professores"
                    }/${data_single.id}`}
                  >
                    <Button variant="default">Editar</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
