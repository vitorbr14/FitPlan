import { PrismaClient } from "@prisma/client";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/api-errors";

// Essa função serve para evitar que professores veja os alunos de outras academias
const prisma = new PrismaClient();
export const checkGym = async (professor_id: string, aluno_id: string) => {
  const getProfessorGym = await prisma.professor.findUnique({
    where: {
      id: professor_id,
    },
  });

  if (!getProfessorGym) {
    throw new NotFoundError("Academia do professor não encontrada.");
  }

  const check = await prisma.aluno.findUnique({
    where: {
      id: Number(aluno_id),

      academia_id: Number(getProfessorGym.academia_id),
    },
  });

  if (check === null) {
    return false;
  }

  return true;
};
