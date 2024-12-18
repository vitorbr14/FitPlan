import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/api-errors";
import { checkGym } from "../utils/checkGym";

const prisma = new PrismaClient();

export const aluno_general_info = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id } = req;
  const check = await checkGym(user_id, id);
  if (!check) {
    throw new NotFoundError("Aluno não encontrado");
  }
  const aluno = await prisma.aluno.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      academia: true,
      role: true,
      matricula: {
        include: {
          plano: true,
        },
      },
    },
  });

  if (!aluno) {
    throw new BadRequestError(
      "Aluno não encontrado, verifique o ID e tente novamente."
    );
  }
  res.json(aluno);
};
