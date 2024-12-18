-- CreateEnum
CREATE TYPE "Cobranca_Status" AS ENUM ('PAGO', 'ABERTA', 'VENCIDA');

-- CreateTable
CREATE TABLE "cobranca" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "matricula_id" INTEGER NOT NULL,
    "status" "Cobranca_Status" NOT NULL DEFAULT 'ABERTA',

    CONSTRAINT "cobranca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cobranca" ADD CONSTRAINT "cobranca_matricula_id_fkey" FOREIGN KEY ("matricula_id") REFERENCES "matricula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
