/*
  Warnings:

  - You are about to drop the column `sexo_id` on the `aluno` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[aluno_id]` on the table `sexo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aluno_id` to the `sexo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_sexo_id_fkey";

-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "sexo_id";

-- AlterTable
ALTER TABLE "sexo" ADD COLUMN     "aluno_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "sexo_aluno_id_key" ON "sexo"("aluno_id");

-- AddForeignKey
ALTER TABLE "sexo" ADD CONSTRAINT "sexo_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
