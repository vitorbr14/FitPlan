import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../errors/api-errors";

const prisma = new PrismaClient();

const treinoJson = {
  aluno_id: 18,
  professor_id: "iIJ0il2uYWUO5WUszJtZ2RfHrZb2",
  frequencia_id: 1,
  exercicios: [
    {
      dia_id: 1,
      set_id: 1,
      exercise_id: 6,
    },
    {
      dia_id: 1,
      set_id: 1,
      exercise_id: 5,
    },
    {
      dia_id: 1,
      set_id: 1,
      exercise_id: 4,
    },
    {
      dia_id: 1,
      set_id: 1,
      exercise_id: 7,
    },
  ],
};

export const novotreino = async (req: Request, res: Response) => {
  const novoTreino = await prisma.treinoaluno.create({
    data: {
      aluno_id: treinoJson.aluno_id,
      professor_id: treinoJson.professor_id,
      frequencia_id: treinoJson.frequencia_id,
      exercicios: {
        create: treinoJson.exercicios.map((exercisio) => {
          return exercisio;
        }),
      },
    },
  });

  if (!novoTreino) {
    throw new BadRequestError("Deu ruim");
  }

  res.json(novoTreino);
};
