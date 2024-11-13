import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";

const prisma = new PrismaClient();

export const dashboard = async (req: Request, res: Response) => {
  res.json("déshi");
};

export const getAlunos = async (req: Request, res: Response) => {
  const { skip, take, search } = req.query as any;
  const { user_id } = req;
  const totalAlunos = await prisma.aluno.count();
  const paginas = Math.ceil(totalAlunos / Number(take));

  const findGym_id = await prisma.professor.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!findGym_id) {
    throw new NotFoundError("Professor não encontrado.");
  }

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
        academia_id: Number(findGym_id?.academia_id),
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
    where: {
      academia_id: Number(findGym_id?.academia_id),
    },
  });

  res.json({
    alunos,
    paginas,
  });
};

export const newAluno = async (req: Request, res: Response) => {
  const { email, nome, academia_id } = req.body;
  const { user_id } = req;

  const findGym_id = await prisma.professor.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!findGym_id) {
    throw new NotFoundError("Professor não encontrado.");
  }
  const createAluno = await prisma.aluno.create({
    data: {
      email: email,
      nome: nome,
      role_id: 1,
      academia_id: Number(findGym_id.academia_id),
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
  const { id, nome, email } = req.body;
  const { user_id } = req;
  // if (!id || !nome || !email) {
  //   throw new BadRequestError("Insira todos os campos, por favor!");
  // }

  console.log(user_id);

  const findGym_id = await prisma.professor.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!findGym_id) {
    throw new NotFoundError("Professor não encontrado.");
  }

  const novoProfessor = await prisma.professor.create({
    data: {
      email,
      id,
      nome,
      academia_id: Number(findGym_id?.academia_id),
      role_id: 3,
    },
  });

  if (!novoProfessor) {
    throw new BadRequestError(
      "Algo deu errado na criação do professor, tente novamente!"
    );
  }

  res.json({ user_id });
};

export const getProfessores = async (req: Request, res: Response) => {
  const { skip, take, search } = req.query as any;
  const { user_id } = req;
  const totalProfessores = await prisma.professor.count();
  const paginas = Math.ceil(totalProfessores / Number(take));

  const findGym_id = await prisma.professor.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!findGym_id) {
    throw new NotFoundError("Professor não encontrado.");
  }

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
        academia_id: Number(findGym_id?.academia_id),
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
    where: {
      academia_id: Number(findGym_id?.academia_id),
    },
  });

  res.json({
    alunos: getProfessores,
    paginas,
  });
};
