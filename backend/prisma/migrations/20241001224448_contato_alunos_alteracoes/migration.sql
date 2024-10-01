/*
  Warnings:

  - You are about to drop the column `estadoCivilId` on the `aluno` table. All the data in the column will be lost.
  - Added the required column `estado_civil_id` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_estadoCivilId_fkey";

-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "estadoCivilId",
ADD COLUMN     "estado_civil_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_estado_civil_id_fkey" FOREIGN KEY ("estado_civil_id") REFERENCES "EstadoCivil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
