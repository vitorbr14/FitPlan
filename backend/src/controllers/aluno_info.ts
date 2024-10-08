import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../errors/api-errors";

const prisma = new PrismaClient();

export const aluno_general_info = async (req: Request, res: Response) => {
  const { id } = req.params;
  const aluno = await prisma.aluno.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      academia: true,
      role: true,
    },
  });

  if (!aluno) {
    throw new BadRequestError(
      "Aluno não encontrado, verifique o ID e tente novamente."
    );
  }
  res.json(aluno);
};
