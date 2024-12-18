import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import admin from "../firebase";
const prisma = new PrismaClient();

export const createAdmin = async (req: Request, res: Response) => {
  const { id, email, nome } = req.body;
  // Os admins agora são professores, so oq muda é o role.

  const newAdmin = await prisma.professor.create({
    data: {
      email: email,
      id: id,
      nome: nome,
      role_id: 2,
    },
  });

  if (!newAdmin) {
    throw new BadRequestError(
      "Erro ao criar um administrador, tente novamente."
    );
  }

  res.json(newAdmin);
};

export const createGym = async (req: Request, res: Response) => {
  const { nome_academia, telefone, cnpj, admin_id } = req.body;
  const newGym = await prisma.academia.create({
    data: {
      nome_academia,
      telefone,
      cnpj,
      admin_id,
    },
  });
  res.json(newGym);
};

// Essa rota serve para apos o login no frontend, buscar os dados como
// a academia que o professor está afiliado
export const login = async (req: Request, res: Response) => {
  const findGym = await prisma.professor.findUnique({
    where: {
      id: req.user_id,
    },
  });
  // const getProfessorInfos = await prisma.professor.findUnique({
  //   where: {
  //     id: req.user_id,
  //   },
  // });

  // if (!getProfessorInfos) {
  //   throw new NotFoundError("Professor não encontrado!");
  // }
  res.json(findGym?.academia_id);
};

export const editProfessor = async (req: Request, res: Response) => {
  const { professor_id, academia_id } = req.body;

  const updateProfessor = await prisma.professor.update({
    where: {
      id: professor_id,
    },
    data: {
      academia_id: academia_id,
    },
  });

  if (!updateProfessor) {
    throw new BadRequestError("Errou ao relacionar professor a academia.");
  }

  res.json(updateProfessor);
};
