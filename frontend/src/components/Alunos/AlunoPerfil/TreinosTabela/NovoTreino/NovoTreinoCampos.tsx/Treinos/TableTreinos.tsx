import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { novoTreinoSchema } from "../../NovoTreino";

type TypeTableTreinos = {
  fields: FieldArrayWithId<
    z.infer<typeof novoTreinoSchema>,
    "workout.treino_a",
    "id"
  >[];
  form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
};

export const TableTreinos = ({ fields, form }: TypeTableTreinos) => {
  return (
    <div>
      <Table>
        <TableCaption>Exercicios</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Grupo Muscular</TableHead>
            <TableHead>Exercicio</TableHead>
            <TableHead>Séries</TableHead>
            <TableHead className="">Repetições</TableHead>
            <TableHead className="">Descanço</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="teste">
          {fields.map((field, index) => {
            return (
              <TableRow className="w-12/12">
                <TableCell className="font-medium">
                  {form.getValues(`workout.treino_b.${index}.muscle_group`)}
                </TableCell>
                <TableCell className="font-medium">
                  {form.getValues(`workout.treino_b.${index}.exercise_name`)}
                </TableCell>
                <TableCell className="font-medium">
                  {form.getValues(`workout.treino_b.${index}.sets`)}
                </TableCell>
                <TableCell className="font-medium">
                  {form.getValues(`workout.treino_b.${index}.reps`)}
                </TableCell>
                <TableCell className="font-medium">
                  {form.getValues(`workout.treino_b.${index}.rest`)}s
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
