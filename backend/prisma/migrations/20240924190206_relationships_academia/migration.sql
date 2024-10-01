/*
  Warnings:

  - Added the required column `academia_id` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `academia_id` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "academia_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "academia_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
