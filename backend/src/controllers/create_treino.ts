import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../errors/api-errors";

const prisma = new PrismaClient();

const treinoJson = {
  aluno_id: 18,
  professor_id: "iIJ0il2uYWUO5WUszJtZ2RfHrZb2",
  frequencia_id: 1,
  objetivo_id: 1,
  inicio_treino: new Date(),
  vencimento_treino: new Date(),
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

type Exercicio = {
  dia_id: number;
  set_id: number;
  exercise_id: number;
};

type Data = {
  data: Treino;
};
type Treino = {
  aluno_id: number;
  professor_id: string;
  frequencia_id: number;
  objetivo_id: number;
  inicio_treino: string;
  vencimento_treino: any;
  exercicios: Exercicio[];
};

export const novotreino = async (req: Request, res: Response) => {
  const { data } = req.body as Data;

  const novoTreino = await prisma.treinoaluno.create({
    data: {
      aluno_id: data.aluno_id,
      professor_id: req.user_id,
      frequencia_id: data.frequencia_id,
      objetivo_id: data.objetivo_id,
      inicio_treino: data.inicio_treino,
      vencimento_treino: data.vencimento_treino,
      exercicios: {
        create: data.exercicios.map((exercicio) => {
          return exercicio;
        }),
      },
    },
  });

  console.log(novoTreino);
  if (!novoTreino) {
    throw new BadRequestError("Deu ruim");
  }

  res.json(novoTreino);
};

export const getObjetivos = async (req: Request, res: Response) => {
  const getObjetivos = await prisma.objetivos.findMany({});
  if (!getObjetivos)
    throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getObjetivos);
};

export const getFrequencia = async (req: Request, res: Response) => {
  const getFrequencia = await prisma.frequenciatreino.findMany({});
  if (!getFrequencia)
    throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getFrequencia);
};

export const getGruposMusculares = async (req: Request, res: Response) => {
  const getGruposMusculares = await prisma.grupomuscular.findMany({});
  if (!getGruposMusculares)
    throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getGruposMusculares);
};

export const getExercicios = async (req: Request, res: Response) => {
  const getExercicios = await prisma.exercicio.findMany({});
  if (!getExercicios)
    throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getExercicios);
};

export const getSets = async (req: Request, res: Response) => {
  const getSets = await prisma.sets.findMany({});
  if (!getSets) throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getSets);
};

export const getDiaTreino = async (req: Request, res: Response) => {
  const getDiaTreino = await prisma.calendariotreino.findMany({});
  if (!getDiaTreino)
    throw new BadRequestError("Algo deu errado, tente novamente");
  res.json(getDiaTreino);
};

export const getTreinosAluno = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getTreinos = await prisma.treinoaluno.findMany({
    where: {
      aluno_id: Number(id),
    },
    include: {
      objetivo: true,
    },
  });

  if (!getTreinos) {
    throw new BadRequestError("Algo deu errado, tente novamente mais tarde!");
  }

  res.json(getTreinos);
};

export const getSingleTreino = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Pegar infos gerais do treino
  // To fazendo uma chamada separada pq se eu fizesse direto no
  // exerciseOnTreino ia voltar muita coisa no json.

  const getInfosTreino = await prisma.treinoaluno.findFirst({
    where: {
      id: id,
    },
    include: {
      professor: true,
      frequencia: true,
      objetivo: true,
      aluno: true,
    },
  });

  if (!getInfosTreino) {
    throw new BadRequestError("Algo deu errado, tente novamente mais tarde!");
  }

  const findExercises = await prisma.exerciseontreino.findMany({
    where: {
      treino_id: getInfosTreino.id,
    },
    include: {
      exercise: {
        include: {
          grupomuscular: true,
        },
      },
      sets: true,
      calendariotreino: true,
    },
  });

  if (!findExercises) {
    throw new BadRequestError("Exercisios não encontrados!");
  }
  res.json({ getInfosTreino, findExercises });
};
