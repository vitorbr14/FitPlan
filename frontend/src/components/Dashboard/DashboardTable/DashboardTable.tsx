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

const avatarIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

export const getRandomAvatar = () => {
  const random = avatarIds[Math.floor(Math.random() * avatarIds.length)];
  return random;
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
                        {" "}
                        <AvatarImage
                          src={`https://avatar.iran.liara.run/public/${getRandomAvatar()}`}
                        />
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
