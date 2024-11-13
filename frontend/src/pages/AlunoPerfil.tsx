import AlunoPerfilBanner from "@/components/Alunos/AlunoPerfil/AlunoPerfilBanner";
import { AlunoPerfilBreadcrumb } from "@/components/Alunos/AlunoPerfil/AlunoPerfilBreadcrumb";
import { AlunoPerfilFinanceiroTable } from "@/components/Alunos/AlunoPerfil/FinanceiroTabela/AlunoPerfilFinanceiroTable";
import { AlunoPerfilNavbar } from "@/components/Alunos/AlunoPerfil/AlunoNavBar/AlunoPerfilNavbar";
import { Container } from "@/components/layout/Container";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading";
type Academia = {
  id: number;
  nome_academia: string;
  telefone: string;
  cnpj: string;
  admin_id: string;
};

type Role = {
  id: number;
  role_name: string;
};

type Usuario = {
  email: string;
  id: number;
  nome: string;
  role_id: number;
  academia_id: number;
  estado_civil_id: number | null;
  sexo_id: number | null;
  academia: Academia;
  role: Role;
};

export const AlunoPerfil = () => {
  let { id } = useParams();

  const getAluno = async (id: number): Promise<Usuario> => {
    const fetching = await axios.get(
      `${import.meta.env.VITE_API_URL}aluno/alunoinfo/${id}/`,
      { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
    );

    return fetching.data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["aluno", id],
    queryFn: () => getAluno(Number(id)),
  });

  if (error)
    return (
      <div className="w-full">
        <h1 className="text-lg">Aluno não encontrado</h1>
      </div>
    );
  if (isPending) {
    return (
      <div className=" w-full h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Container>
      <div className="lg:w-10/12 m-auto">
        <div className="py-5">
          {data && <AlunoPerfilBreadcrumb nome={data.nome} />}
        </div>

        <div>{data && <AlunoPerfilBanner nome={data.nome} />}</div>

        <div className="py-6 ">
          <AlunoPerfilNavbar />
        </div>
      </div>
    </Container>
  );
};
