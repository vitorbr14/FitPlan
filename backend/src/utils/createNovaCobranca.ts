import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

//LInux
//Windows
const prisma = new PrismaClient();
export const createNovaCobranca = async (
  matricula_obj: any,
  plano: any,
  data: any
) => {
  let dataVencimento;

  switch (plano) {
    case 1:
      dataVencimento = dayjs(data.data_cobrança).add(1, "months").toISOString();
      break;
    case 2:
      dataVencimento = dayjs(data.data_cobrança).add(6, "months").toISOString();
      break;
    case 3:
      dataVencimento = dayjs(data.data_cobrança).add(1, "year").toISOString();
      break;
    default:
      throw new Error("Plano inválido");
  }

  const novaCobranca = await prisma.cobranca.create({
    data: {
      data: new Date(data.data_cobrança),
      data_vencimento: dataVencimento,
      preco: Number(matricula_obj.plano.plano_price),
      matricula_id: matricula_obj.id,
      status: "VENCIDA",
    },
  });

  return novaCobranca;
};
