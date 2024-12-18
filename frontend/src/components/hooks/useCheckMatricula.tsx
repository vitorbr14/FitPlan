// Custom hook para checar se o aluno está matriculado ou não.
// É usado varias vezes, então decidi extrair a lógica e fazer um hook

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "sonner";
type Plano = {
  id: number;
  plano: string;
  plano_price: string;
};

type Matricula = {
  id: number;
  aluno_id: number;
  academia_id: number;
  plano_id: number;
  inicio: string;
  status: boolean;
  plano: Plano;
};

const getMatriculaFromAluno = async (
  id: string
): Promise<Matricula[] | undefined> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}aluno/matricula/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

const useCheckMatricula = (id_aluno: string) => {
  const [notMatriculado, setNotMatriculado] = useState<boolean | undefined>(
    undefined
  );

  const toastMatricula = () => {
    toast.error("Aluno sem matrícula!", {
      description: "Por favor, crie uma matrícula para o aluno primeiro!",
    });
  };

  const { data: matricula_aluno } = useQuery({
    queryKey: ["matricula", id_aluno],
    queryFn: () => getMatriculaFromAluno(id_aluno),
  });
  console.log(matricula_aluno);
  useEffect(() => {
    if (matricula_aluno && matricula_aluno?.length === 0) {
      setNotMatriculado(true);
      console.log("n esta matriculado");
    } else {
      setNotMatriculado(false);
    }
  }, [matricula_aluno]);

  return { notMatriculado, toastMatricula, matricula_aluno };
};

export default useCheckMatricula;
