import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFieldArray, UseFormReturn } from "react-hook-form";

import { allexercicios, gruposMusculares, setstype } from "../../AbasTreinos";
import GrupoMuscular from "./GrupoMuscular";

import { Button } from "@/components/ui/button";

import { z } from "zod";
import { novoTreinoSchema } from "../NovoTreino";

export enum treinos_letra {
  exercicios = "exercicios",
  exerciciosB = "exerciciosB",
  exerciciosC = "exerciciosC",
}
export type TreinosType = {
  diaTreino: string;
  exercicios: allexercicios[];
  grupos_musculares: gruposMusculares[];
  sets: setstype[] | undefined;
  formControl: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
};

export const TreinoB = ({
  formControl,
  grupos_musculares,
  exercicios,
  sets,
  diaTreino,
}: TreinosType) => {
  const { fields: fields_b, append } = useFieldArray({
    name: "exerciciosB",
    control: formControl.control,
  });

  return (
    <div>
      <div>
        <Button
          onClick={() =>
            append({ dia_id: diaTreino, exercise_id: "", set_id: "" })
          }
          variant="outline"
          className="w-full"
          type="button"
        >
          Novo exercicio
        </Button>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Exercicio</TableHead>
              <TableHead>Sets</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {fields_b &&
              fields_b.map((field, index) => {
                return (
                  <TableRow className="">
                    <GrupoMuscular
                      sets={sets}
                      treino_dia={treinos_letra.exerciciosB}
                      formControl={formControl}
                      field={field}
                      index={index}
                      exercicios={exercicios}
                      grupos_musculares={grupos_musculares}
                    />
                  </TableRow>
                );
              })}

            <TableCell className="w-[200px]"></TableCell>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
