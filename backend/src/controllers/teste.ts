import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import admin from "../firebase";
export const testesfirebase = async (req: Request, res: Response) => {
  const users = await admin.auth().listUsers(10);
  res.json(users);
};
