/*
  Warnings:

  - Added the required column `endereco_id` to the `aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo_id` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "endereco_id" INTEGER NOT NULL,
ADD COLUMN     "sexo_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "sexo" (
    "id" SERIAL NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "sexo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "cidade" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_sexo_id_fkey" FOREIGN KEY ("sexo_id") REFERENCES "sexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
