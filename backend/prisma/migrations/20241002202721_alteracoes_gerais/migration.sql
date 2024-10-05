/*
  Warnings:

  - Made the column `aluno_id` on table `contato` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_aluno_id_fkey";

-- AlterTable
ALTER TABLE "contato" ALTER COLUMN "aluno_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
