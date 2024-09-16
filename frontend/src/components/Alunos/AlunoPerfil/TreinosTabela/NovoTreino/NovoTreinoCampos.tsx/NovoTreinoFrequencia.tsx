import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { novoTreinoSchema } from "../NovoTreino";
import { z } from "zod";

const frequenciasTreinos = [
  { id: "1", nome: "AB" },
  { id: "2", nome: "ABC" },
  { id: "3", nome: "ABCD" },
  { id: "4", nome: "ABCDE" },
];

type TypeNovoTreinoFrequencia = {
  form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
};

export const NovoTreinoFrequencia = ({ form }: TypeNovoTreinoFrequencia) => {
  return (
    <>
      <FormField
        control={form.control}
        name="frequencia"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Frequencia</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {frequenciasTreinos.map((freq) => {
                  return <SelectItem value={freq.id}>{freq.nome}</SelectItem>;
                })}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
