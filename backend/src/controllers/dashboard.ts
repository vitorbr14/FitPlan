import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../errors/api-errors";

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
          nome: "desc",
        },
      ],
      include: {
        endereco: true,
        contato: true,
        estadoCivil: true,
        sexo: true,
      },

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
        nome: "desc",
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

export const newAluno = async (req: Request, res: Response) => {
  const { email, nome, role_id } = req.body;
  const createAluno = await prisma.aluno.create({
    data: {
      email: email,
      nome: nome,
      role_id: role_id,
      academia_id: 1,
    },
  });

  if (!createAluno) {
    throw new BadRequestError("Algo deu errado, tente novamente mais tarde.");
  }
  res.json({ createAluno });
};
