import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { novoTreinoSchema } from "./NovoTreino/NovoTreino";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  FieldArrayWithId,
  useFieldArray,
  UseFieldArrayAppend,
  UseFormReturn,
} from "react-hook-form";
import { useEffect, useState } from "react";
import { ContentTabs } from "./NovoTreino/ContentTabs";
import { TreinoA } from "./NovoTreino/TreinosContents/TreinoA";

import axios from "axios";
import { TreinoB } from "./NovoTreino/TreinosContents/TreinoB";
import Cookies from "js-cookie";
import { TreinoC } from "./NovoTreino/TreinosContents/TreinoC";

type freqType = {
  id: number;
  frequencia: string;
};
export type AbasTreinosType = {
  //   formControl: UseFormReturn<typeof novoTreinoSchema>;
  formControl: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
  freq: freqType[];
};

export type gruposMusculares = {
  id: number;
  nome_grupo: string;
};

export type allexercicios = {
  id: number;
  nome_exercicio: string;
  grupo_muscular: number;
};

export type setstype = {
  id: number;
  sets: number;
};
export type diaTreino = {
  id: string;
  dia: string;
};

export const AbasTreinos = ({ formControl, freq }: AbasTreinosType) => {
  const [freqAtual, setFreqAtual] = useState<string[]>();
  const [diaTreino, setDiaTreino] = useState<diaTreino[]>();
  const [grupos_musculares, setGrupos_musculares] = useState<
    gruposMusculares[]
  >([]);
  const [sets, setSets] = useState<setstype[] | undefined>();
  const [allexercicios, setAllexercicios] = useState<allexercicios[]>([]);
  //formControl.getValues("frequencia_id")
  console.log(formControl.formState.errors);

  useEffect(() => {
    console.log(formControl.getValues("frequencia_id"));
    //! FALTA DEIXAR MAIS APRESENTAVEL
    //! DEIXAR MAIS "AUTOMATICO":
    //! PEGO DO ID DO FREQUENCIA E ACHO QUAL É A FREQUENCIA
    // ! AI EU SETO O SETFREQ COM OVALOR
    if (formControl.getValues("frequencia_id") === "1") {
      setFreqAtual(["A", "B"]);
      formControl.resetField("exerciciosC");
    }
    if (formControl.getValues("frequencia_id") === "2") {
      setFreqAtual(["A", "B", "C"]);
    }
  }, [formControl.getValues("frequencia_id")]);

  // useEffect(() => {
  //   console.log({ frequencaiAtual: freqAtual });
  // });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}treino/grupos`, {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      })
      .then(function (response) {
        setGrupos_musculares(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}treino/exercicios`, {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      })
      .then(function (response) {
        setAllexercicios(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}treino/dia_treino`, {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      })
      .then(function (response) {
        setDiaTreino(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}treino/sets`, {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      })
      .then(function (response) {
        setSets(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });
  }, []);

  const getDiaTreino_id = (letra: string) => {
    return diaTreino
      ?.find((dia) => dia.dia === letra.toUpperCase())
      ?.id.toString();
  };

  return (
    <>
      <Tabs defaultValue="account" className="">
        <TabsList>
          {freqAtual &&
            freqAtual.map((frequencia_aba) => {
              return (
                <TabsTrigger value={frequencia_aba}>
                  {frequencia_aba}
                </TabsTrigger>
              );
            })}
        </TabsList>

        <TabsContent value="A">
          <TreinoA
            diaTreino={getDiaTreino_id("a") || ""}
            sets={sets}
            formControl={formControl}
            grupos_musculares={grupos_musculares}
            exercicios={allexercicios}
          />
        </TabsContent>

        <TabsContent value="B">
          <TreinoB
            diaTreino={getDiaTreino_id("b") || ""}
            sets={sets}
            formControl={formControl}
            grupos_musculares={grupos_musculares}
            exercicios={allexercicios}
          />
        </TabsContent>
        <TabsContent value="C">
          <TreinoC
            diaTreino={getDiaTreino_id("c") || ""}
            sets={sets}
            formControl={formControl}
            grupos_musculares={grupos_musculares}
            exercicios={allexercicios}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};
