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
    // Requisição para ver quantos records acham:

    const alunosCount = await prisma.aluno.findMany({
      where: {
        nome: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });

    // Requisiçao para retornar os itens paginados:
    const alunos = await prisma.aluno.findMany({
      where: {
        nome: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          id: "asc",
        },
      ],

      skip: (Number(skip) - 1) * Number(take),
      take: Number(take),
    });

    const paginas = Math.ceil(alunosCount.length / Number(take));

    return res.json({ alunos, paginas });
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

export const newAluno = async (req: Request, res: Response) => {
  const { email, nome, role_id, academia_id, sexo_id, estado_civil_id } =
    req.body;
  const createAluno = await prisma.aluno.create({
    data: {
      email: email,
      nome: nome,
      role_id: role_id,
      academia_id: academia_id,
      estado_civil_id,
      sexo_id,
    },
  });

  if (!createAluno) {
    throw new BadRequestError("Algo deu errado, tente novamente mais tarde.");
  }
  res.json({ createAluno });
};

type createProfessorType = {
  nome: string;
  email: string;
  role_id: number;
  academia_id: number;
};

export const createProfessor = async (req: Request, res: Response) => {
  const { nome, email, role_id, academia_id } = req.body as createProfessorType;

  const newProfessor = await prisma.professor.create({
    data: {
      nome: nome,
      email: email,
      academia_id: academia_id,
      role_id: role_id,
    },
  });

  if (!newProfessor) {
    throw new BadRequestError(
      "Algo deu errado na criação do professor, tente novamente mais tarde!"
    );
  }
  res.json(newProfessor);
};

export const getProfessores = async (req: Request, res: Response) => {
  const { skip, take, search } = req.query as any;

  const totalProfessores = await prisma.professor.count();
  const paginas = Math.ceil(totalProfessores / Number(take));

  if (search) {
    // Requisição para ver quantos records acham:

    const professorCount = await prisma.professor.findMany({
      where: {
        nome: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });

    const getProfessores = await prisma.professor.findMany({
      where: {
        nome: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          id: "asc",
        },
      ],

      skip: (Number(skip) - 1) * Number(take),
      take: Number(take),
    });

    const paginas = Math.ceil(professorCount.length / Number(take));

    return res.json({
      alunos: getProfessores,
      paginas,
    });
  }
  const getProfessores = await prisma.professor.findMany({
    orderBy: [
      {
        nome: "desc",
      },
    ],
    skip: (Number(skip) - 1) * Number(take),
    take: Number(take),
  });

  res.json({
    alunos: getProfessores,
    paginas,
  });
};
