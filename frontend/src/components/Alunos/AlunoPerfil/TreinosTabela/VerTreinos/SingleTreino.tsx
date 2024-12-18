import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SingleExerciseType } from "@/types/types";

import { ExerciciosTable } from "./ExerciciosTable";
import { useQuery } from "@tanstack/react-query";

import Cookies from "js-cookie";
import { LoadingSpinner } from "@/components/ui/loading";

type TypeSingleTreino = {
  id: string;
};
export const SingleTreino = ({ id }: TypeSingleTreino) => {
  const { data: singleTreino, isPending } = useQuery<SingleExerciseType>({
    queryKey: ["treino_single", id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}treino/single/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((res) => res.json()),
  });

  //   getInfosTreino: {
  //     id: "9a957d03-6794-4330-8db3-d6f82b08874b",
  //     aluno_id: 11,
  //     professor_id: "NewFoXWiZuURrGeaNf2Fsa1AtUE2",
  //     frequencia_id: 2,
  //     objetivo_id: 1,
  //     inicio_treino: "2024-12-18T03:00:00.000Z",
  //     vencimento_treino: null,
  //     professor: {
  //       id: "NewFoXWiZuURrGeaNf2Fsa1AtUE2",
  //       nome: "Vitor Gomes",
  //       email: "vitorgome213123s@gmail.com",
  //       role_id: 3,
  //       academia_id: 17,
  //     },
  //     frequencia: {
  //       id: 2,
  //       frequencia: "ABC",
  //     },
  //     objetivo: {
  //       id: 1,
  //       objetivo: "Hipertrofia",
  //     },
  //     aluno: {
  //       email: "emoriaya@gmail.com",
  //       id: 11,
  //       nome: "Emori Aya",
  //       role_id: 1,
  //       academia_id: 17,
  //       estado_civil_id: null,
  //       sexo_id: null,
  //     },
  //   },
  //   findExercises: [
  //     {
  //       id: "812441a9-507a-4562-af31-9a6465f93197",
  //       treino_id: "9a957d03-6794-4330-8db3-d6f82b08874b",
  //       dia_id: 2,
  //       set_id: 1,
  //       exercise_id: 2,
  //       exercise: {
  //         id: 2,
  //         nome_exercicio: "Supino Inclinado Halter",
  //         grupo_muscular: 1,
  //         grupomuscular: {
  //           id: 1,
  //           nome_grupo: "Peito",
  //         },
  //       },
  //       sets: {
  //         id: 1,
  //         sets: "3X12",
  //       },
  //       calendariotreino: {
  //         id: 2,
  //         dia: "A",
  //       },
  //     },
  //     {
  //       id: "1aae2b65-7fc5-4be2-90ed-f137b1bb696e",
  //       treino_id: "9a957d03-6794-4330-8db3-d6f82b08874b",
  //       dia_id: 3,
  //       set_id: 1,
  //       exercise_id: 8,
  //       exercise: {
  //         id: 8,
  //         nome_exercicio: "Rosca alternada",
  //         grupo_muscular: 2,
  //         grupomuscular: {
  //           id: 2,
  //           nome_grupo: "Bíceps",
  //         },
  //       },
  //       sets: {
  //         id: 1,
  //         sets: "3X12",
  //       },
  //       calendariotreino: {
  //         id: 3,
  //         dia: "B",
  //       },
  //     },
  //     {
  //       id: "b20b1d8f-fa32-478b-8714-cd3662a5588c",
  //       treino_id: "9a957d03-6794-4330-8db3-d6f82b08874b",
  //       dia_id: 1,
  //       set_id: 1,
  //       exercise_id: 6,
  //       exercise: {
  //         id: 6,
  //         nome_exercicio: "Peck Deck",
  //         grupo_muscular: 1,
  //         grupomuscular: {
  //           id: 1,
  //           nome_grupo: "Peito",
  //         },
  //       },
  //       sets: {
  //         id: 1,
  //         sets: "3X12",
  //       },
  //       calendariotreino: {
  //         id: 1,
  //         dia: "C",
  //       },
  //     },
  //   ],
  // };
  const [freq_treino, setFreq_treino] = useState<string[] | undefined>();
  useEffect(() => {
    if (singleTreino) {
      const frequencia =
        singleTreino.getInfosTreino.frequencia.frequencia.split("");

      setFreq_treino(frequencia);
      console.log(frequencia);
    }
  }, [singleTreino]);

  if (isPending) {
    return (
      <div className="flex justify-center py-20">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <>
      <div>
        <button onClick={() => console.log(singleTreino)}>fetch</button>
        <div className="">
          <h5>
            <span className="font-bold">Professor: </span>
            <span className="text-sm  text-gray-800 italic">
              {singleTreino && singleTreino.getInfosTreino.professor.nome}
            </span>
          </h5>
          <h5>
            <span className="font-bold">Aluno: </span>
            <span className="text-sm text-gray-800 italic">
              {singleTreino && singleTreino.getInfosTreino.aluno.nome}
            </span>
          </h5>
          <h5>
            <span className="font-bold">Objetivo: </span>
            <span className="text-sm text-gray-800 italic">
              {singleTreino && singleTreino.getInfosTreino.objetivo.objetivo}
            </span>
          </h5>
        </div>
      </div>

      <div className="">
        <Tabs className="">
          <TabsList className={`"grid  grid-cols-${freq_treino?.length}"`}>
            {freq_treino
              ? freq_treino.map((freq) => {
                  return (
                    <TabsTrigger value={freq} className="px-5">
                      Treino {freq}
                    </TabsTrigger>
                  );
                })
              : ""}
          </TabsList>

          {freq_treino
            ? freq_treino.map((freq) => {
                return (
                  <TabsContent value={freq} className="px-5">
                    {singleTreino && (
                      <ExerciciosTable
                        dia={freq}
                        exercicios={singleTreino?.findExercises}
                      />
                    )}
                  </TabsContent>
                );
              })
            : ""}
        </Tabs>
      </div>
    </>
  );
};
