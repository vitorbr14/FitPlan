/*
  Warnings:

  - Added the required column `estadoCivilId` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "estadoCivilId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "EstadoCivil" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EstadoCivil_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_estadoCivilId_fkey" FOREIGN KEY ("estadoCivilId") REFERENCES "EstadoCivil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
