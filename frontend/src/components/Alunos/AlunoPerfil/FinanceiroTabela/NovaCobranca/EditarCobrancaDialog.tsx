import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type editarCobrancaProps = {
  id: number;
};
export const EditarCobrancaDialog = ({ id }: editarCobrancaProps) => {
  const getSingleCobranca = async (idCobranca: number) => {
    const fetching = await axios.get(
      `http://localhost:5656/api/cobranca/cobranca/${idCobranca}`
    );

    return fetching.data;
  };

  const queryClient = useQueryClient();
  const { data: cobranca_info } = useQuery({
    queryKey: ["cobranca_single"],
    queryFn: () => getSingleCobranca(id),
  });

  return (
    <div>
      <Button onClick={() => console.log(cobranca_info)}>Fetch</Button>
      <h1 className="text-3xl font-semibold">Editar Cobrança</h1>
      <h3 className="text-base text-gray-600">John Doe Da Silva</h3>
    </div>
  );
};
