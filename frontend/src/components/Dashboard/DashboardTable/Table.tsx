import { AlunoTableNavbar } from "@/components/Dashboard/DashboardTable/AlunoTableNavbar";
import { Button } from "@/components/ui/button";
import { FetchDataResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import DashboardTable from "./DashboardTable";
import { useContext, useEffect, useState } from "react";
import { useSearchAluno } from "@/store/searchAlunoStore";
import { AuthContext, useAuth } from "@/contexts/AuthContext";
import Cookies from "js-cookie";
import { auth } from "@/config/firebase";

type tableProps = {
  fetchName: string;
};

export const Table = ({ fetchName }: tableProps) => {
  const { search, cleanSearch } = useSearchAluno();
  const [page, setPage] = useState(1);
  const { user } = useAuth();
  useEffect(() => {
    cleanSearch();
  }, []);

  const fetchAlunos_Professores = async (
    fetchOption: string
  ): Promise<FetchDataResponse> => {
    // quando eu avançava as paginas, por exemplo, para a pagina 5 e em seguida pesquisava algo,
    // a pesquisa retornava, mas ainda ficava na página 5
    // esse if serve para resetar o valor da pagina para 1 caso tenha algo no search
    if (search.length >= 1) {
      setPage(1);
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }dashboard/${fetchOption}?skip=${page}&take=6&search=${search}`,
        { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
      );

      return res.json();
    }

    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }dashboard/${fetchOption}?skip=${page}&take=6&search=${search}`,
      { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
    );

    return res.json();
  };

  const { data, isPending, error } = useQuery({
    queryKey: [fetchName, page, search],
    queryFn: () => fetchAlunos_Professores(fetchName),
  });
  if (error) return <h1>Algo deu errado, tente novamente!</h1>;

  return (
    <div>
      <AlunoTableNavbar fetchName={fetchName} />
      <DashboardTable data={data?.alunos} isPending={isPending} />

      <div>
        <Button
          variant="outline"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Voltar
        </Button>

        <Button
          variant="outline"
          onClick={() => setPage(page + 1)}
          disabled={data && page >= data.paginas}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
};
