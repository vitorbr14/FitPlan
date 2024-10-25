import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  AlreadyExists,
  BadRequestError,
  NotFoundError,
} from "../errors/api-errors";
import dayjs from "dayjs";

const prisma = new PrismaClient();

type novaMatriculaBody = {
  aluno_id: number;
  academia_id: number;
  plano_id: number;
  inicio: string;
  status: boolean;
};
export const novaMatricula = async (req: Request, res: Response) => {
  const { aluno_id, academia_id, plano_id, inicio, status } =
    req.body as novaMatriculaBody;

  if (!aluno_id || !academia_id || !plano_id || !inicio || !status) {
    throw new BadRequestError("Algo deu errado, tente novamente mais tarde.");
  }

  const checarSeExisteMatricula = await prisma.matricula.findUnique({
    where: {
      aluno_id: aluno_id,
    },
  });

  if (checarSeExisteMatricula) {
    throw new AlreadyExists(
      "Aluno já matriculado, exclua a matricula anterior ou escolha um aluno diferente."
    );
  }

  const novaMatricula = await prisma.matricula.create({
    data: {
      aluno_id,
      academia_id,
      plano_id,
      inicio: new Date(inicio),
      status,
    },
  });

  if (!novaMatricula) {
    throw new BadRequestError(
      "Algo deu errado na criação da matricula, cheque os campos e tente novamente."
    );
  }

  res.json(novaMatricula);
};

export const getPlanos = async (req: Request, res: Response) => {
  const planos = await prisma.plano.findMany({});
  if (!planos) throw new BadRequestError("Algo deu errado, tente novamente.");
  res.json(planos);
};

export const getMatriculaAluno = async (req: Request, res: Response) => {
  const { aluno_id } = req.params;

  const get_matricula = await prisma.matricula.findFirst({
    where: {
      aluno_id: Number(aluno_id),
    },
    include: {
      plano: true,
    },
  });

  if (!get_matricula) {
    res.json([]);
    return;
  }

  res.json([get_matricula]);
};
