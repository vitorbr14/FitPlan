import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { AddExercicioBtn } from "../AddExercicioBtn";
import {
  allexercicios,
  diaTreino,
  gruposMusculares,
  setstype,
} from "../../AbasTreinos";
import GrupoMuscular from "./GrupoMuscular";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { BtnTabela } from "../../../BtnTabela";
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

export const TreinoA = ({
  formControl,
  grupos_musculares,
  exercicios,
  sets,
  diaTreino,
}: TreinosType) => {
  const [filtered, setFiltered] = useState([]);
  const { fields, append } = useFieldArray({
    name: "exercicios",
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
            {fields &&
              fields.map((field, index) => {
                return (
                  <TableRow className="">
                    <GrupoMuscular
                      sets={sets}
                      treino_dia={treinos_letra.exercicios}
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
