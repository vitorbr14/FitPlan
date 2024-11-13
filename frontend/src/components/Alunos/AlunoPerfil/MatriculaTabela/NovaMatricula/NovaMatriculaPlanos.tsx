import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { planoSchema } from "../MatriculaTabela";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { planosType } from "@/types/types";
import { useState } from "react";
import { NovaMatriculaPlanos_Skeleton } from "./NovaMatriculaPlanos_Skeleton";
import Cookies from "js-cookie";
type TypePropsNovaMatriculaPlanos = {
  form: UseFormReturn<z.infer<typeof planoSchema>>;
};
export const NovaMatriculaPlanos = ({ form }: TypePropsNovaMatriculaPlanos) => {
  const fetchPlanos = async (): Promise<planosType[]> => {
    const fetiching = await axios.get(
      `${import.meta.env.VITE_API_URL}aluno/planos`,
      { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
    );

    return fetiching.data;
  };

  const { data, isPending } = useQuery({
    queryKey: ["planos"],
    queryFn: () => fetchPlanos(),
  });

  if (isPending) return <NovaMatriculaPlanos_Skeleton />;
  return (
    <>
      <FormField
        control={form.control}
        name="plano"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Escolha um plano para o aluno.</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex justify-between"
                value={form.watch("plano")}
              >
                {data?.map((plano) => {
                  return (
                    <div className=" items-center space-x-2" key={plano.id}>
                      <div className="border w-44 h-24 rounded-sm  checked:bg-yellow-300 ">
                        <div className=" p-3">
                          <div className="flex justify-between items-center ">
                            <div className="flex flex-col">
                              <span className="text-sm">{plano.plano}</span>
                              <span className="text-xs text-gray-500 italic">
                                Pagamento {plano.plano}
                              </span>
                            </div>
                            <div>
                              <FormItem>
                                <FormControl>
                                  <RadioGroupItem value={plano.id.toString()} />
                                </FormControl>
                              </FormItem>
                            </div>
                          </div>
                          <div className="mt-3 font-bold">
                            <h1>R$ {plano.plano_price}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
