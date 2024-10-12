import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  AlreadyExists,
  BadRequestError,
  NotFoundError,
} from "../errors/api-errors";

const prisma = new PrismaClient();

export const getCobrancaAluno = async (req: Request, res: Response) => {
  const { id: aluno_id } = req.params;

  const getMatriculaAluno = await prisma.matricula.findMany({
    where: {
      id: Number(aluno_id),
    },
    include: {
      cobrancas: true,
    },
  });

  res.json(getMatriculaAluno);
};

export const novaCobranca = async (req: Request, res: Response) => {
  const { id: aluno_id } = req.params;

  const getMatricula = await prisma.matricula.findFirst({
    where: {
      aluno_id: Number(aluno_id),
    },
    include: {
      plano: true,
    },
  });

  if (!getMatricula) {
    throw new BadRequestError("Matrícula não encontrada!");
  }

  const novaCobranca = await prisma.cobranca.create({
    data: {
      data: new Date(),
      data_vencimento: new Date(),
      preco: Number(getMatricula.plano.plano_price),
      matricula_id: getMatricula.id,
    },
  });

  if (!novaCobranca) {
    throw new BadRequestError(
      "Algo deu errado na criação da cobrança, tente novamente."
    );
  }
  res.json(novaCobranca);
};
