import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../errors/api-errors";
import admin from "../firebase";
const prisma = new PrismaClient();

export const createAdmin = async (req: Request, res: Response) => {
  const { nome_admin, role_id, academia_id, id, email } = req.body;
  const newAdmin = await prisma.admin.create({
    data: {
      id: id,
      email: email,
      nome_admin: nome_admin,
      role_id: role_id,
    },
  });

  if (!newAdmin) {
    throw new BadRequestError("Algo deu errado, por favor, tente novamente.");
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

export const register = async (req: Request, res: Response) => {
  res.json("registar");
};
