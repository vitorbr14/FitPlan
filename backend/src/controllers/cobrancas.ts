import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  AlreadyExists,
  BadRequestError,
  NotFoundError,
} from "../errors/api-errors";
import dayjs from "dayjs";
import { createNovaCobranca } from "../utils/createNovaCobranca";

const prisma = new PrismaClient();

interface Cobranca {
  id: number;
  data: Date; // Alterado para Date
  data_vencimento: Date; // Alterado para Date
  matricula_id: number;
  status: string; // Pode ser um enum ou string, dependendo de como você o usa
  preco: number;
}

interface Matricula {
  id: number;
  aluno_id: number;
  academia_id: number;
  plano_id: number;
  inicio: Date; // Alterado para Date
  status: boolean;
  cobrancas: Cobranca[];
}

export const getCobrancaAluno = async (req: Request, res: Response) => {
  const { id: aluno_id } = req.params;
  const { skip, take } = req.query;

  const getMatricula = await prisma.matricula.findUnique({
    where: {
      aluno_id: Number(aluno_id),
    },
  });

  if (!getMatricula) {
    throw new BadRequestError("Matricula não encontrada");
  }

  const findAllCobrancas = await prisma.cobranca.findMany({
    skip: (Number(skip) - 1) * Number(take),
    take: Number(take),
    where: {
      matricula_id: getMatricula.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  if (!findAllCobrancas) {
    throw new BadRequestError("Cobrança não encontradas.");
  }
  const totalCobrancas = await prisma.cobranca.count({
    where: {
      matricula_id: getMatricula.id,
    },
  });
  const paginas = Math.ceil(totalCobrancas / Number(take));

  res.json({ findAllCobrancas, paginas });
};

enum statusEnum {
  "PAGO",
  "VENCIDA",
  "ABERTA",
}

type dataType = {
  data_cobrança: Date;
  status: any;
};
type dataCobranca = {
  data: dataType;
};
export const novaCobranca = async (req: Request, res: Response) => {
  const { id: aluno_id } = req.params;
  const { data } = req.body as dataCobranca;

  const getMatricula = await prisma.matricula.findFirst({
    where: {
      aluno_id: Number(aluno_id),
    },
    include: {
      plano: true,
    },
  });

  if (!getMatricula) {
    throw new BadRequestError("Matrícula não encontrada!");
  }

  if (getMatricula?.plano_id === 1) {
    const novaCobranca = await prisma.cobranca.create({
      data: {
        data: new Date(data.data_cobrança),
        data_vencimento: dayjs(data.data_cobrança)
          .add(1, "months")
          .toISOString(),
        preco: Number(getMatricula.plano.plano_price),
        matricula_id: getMatricula.id,
        status: data.status,
      },
    });
    res.json(novaCobranca);
    return;
  }

  if (getMatricula?.plano_id === 2) {
    const novaCobranca = await prisma.cobranca.create({
      data: {
        data: new Date(data.data_cobrança),
        data_vencimento: dayjs(data.data_cobrança)
          .add(6, "months")
          .toISOString(),
        preco: Number(getMatricula.plano.plano_price),
        matricula_id: getMatricula.id,
        status: data.status,
      },
    });
    console.log(novaCobranca);
    res.json(novaCobranca);
    return;
  }
  if (getMatricula?.plano_id === 3) {
    const novaCobranca = await prisma.cobranca.create({
      data: {
        data: new Date(data.data_cobrança),
        data_vencimento: dayjs(data.data_cobrança).add(1, "year").toISOString(),
        preco: Number(getMatricula.plano.plano_price),
        matricula_id: getMatricula.id,
        status: data.status,
      },
    });
    res.json(novaCobranca);
    return;
  }
};

export const getSingleCobranca = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { inicio, status } = req.body;

  const findCobranca = await prisma.cobranca.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      matricula: {
        include: {
          plano: true,
        },
      },
    },
  });

  if (!findCobranca) {
    throw new NotFoundError("Cobrança não encontrada.");
  }
  res.json(findCobranca);
};
