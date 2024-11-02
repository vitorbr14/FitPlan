/*
  Warnings:

  - You are about to drop the column `cpf` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "cpf",
DROP COLUMN "endereco",
DROP COLUMN "nascimento",
DROP COLUMN "sexo",
DROP COLUMN "telefone";
