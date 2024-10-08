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
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { LoadingSpinner } from "../ui/loading";
import { AlunoItemSkeleton } from "./AlunoItemSkeleton";
import { useSearchAluno } from "@/store/searchAlunoStore";

type Aluno = {
  email: string;
  id: number;
  nome: string;
  role_id: number;
  academia_id: number;
  estado_civil_id: number;
  sexo_id: number;
  endereco_id: number;
};

type ResponseData = {
  alunos: Aluno[];
  paginas: number;
};

const AlunosTable = () => {
  const { search, handleSearch } = useSearchAluno();

  const [page, setPage] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState<Number[]>([]);

  const fetchAlunos = async (pageId: number): Promise<ResponseData> => {
    const fetching = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }dashboard/alunos?skip=${pageId}&take=7&search=${search}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    return fetching.data;
  };

  const {
    data: alunos,
    error,
    isPending,
  } = useQuery({
    queryKey: ["alunos", page, search],
    queryFn: () => fetchAlunos(page),
  });

  return (
    <div>
      <Table className="">
        <TableHeader>
          <TableRow className="">
            <TableHead className="">Aluno</TableHead>
            <TableHead className="md:flex md:items-centergit hidden">
              Tel
            </TableHead>
            <TableHead className="">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isPending && <AlunoItemSkeleton />}

          {alunos &&
            alunos.alunos.map((aluno) => (
              <TableRow key={aluno.id}>
                <TableCell className="font-medium w-2/4">
                  <Link to={`/dashboard/alunos/${aluno.id}`}>
                    <div className="flex">
                      <div>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="pl-2">
                        <div className="flex flex-col">
                          <span>{aluno.nome}</span>
                          <span className="text-sm text-gray-500 font-normal">
                            {aluno.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell className="md:block hidden">{aluno.email}</TableCell>
                <TableCell>
                  <Button variant="default">Editar</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div className="flex gap-3 justify-center py-2">
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1 && true}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === alunos?.paginas && true}
        >
          Próximo
        </Button>
        <Button onClick={() => console.log(alunos?.paginas)}>Paginas</Button>
      </div>
    </div>
  );
};

export default AlunosTable;
