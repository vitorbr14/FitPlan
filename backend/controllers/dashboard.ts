import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dashboard = async (req: Request, res: Response) => {
  res.json("déshi");
};

export const getAlunos = async (req: Request, res: Response) => {
  const { skip, take, search } = req.query as any;

  const totalAlunos = await prisma.aluno.count();
  const paginas = Math.ceil(totalAlunos / Number(take));

  if (search) {
    const alunos = await prisma.aluno.findMany({
      where: {
        nome: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          nome: "asc",
        },
      ],
      skip: (Number(skip) - 1) * Number(take),
      take: Number(take),
    });

    const totalAlunos = await prisma.aluno.count();
    const paginas = Math.ceil(totalAlunos / Number(take));

    return res.json({
      alunos,
      paginas,
    });
  }
  const alunos = await prisma.aluno.findMany({
    orderBy: [
      {
        nome: "asc",
      },
    ],
    skip: (Number(skip) - 1) * Number(take),
    take: Number(take),
  });

  res.json({
    alunos,
    paginas,
  });
};
