import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Exercise } from "@/types/types";
import { useEffect } from "react";

type ExerciciosType = {
  exercicios: Exercise[];
  dia: string;
};

export const ExerciciosTable = ({ exercicios, dia }: ExerciciosType) => {
  useEffect(() => {
    console.log(
      exercicios
        .filter((ex) => ex.calendariotreino.dia === dia)
        .map((exee) => console.log(exee))
    );
  }, []);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Exercicio</TableHead>
            <TableHead>Séries</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exercicios
            .filter((ex) => ex.calendariotreino.dia === dia)
            .map((exe) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">
                    {exe.exercise.nome_exercicio}
                  </TableCell>
                  <TableCell>{exe.sets.sets}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
