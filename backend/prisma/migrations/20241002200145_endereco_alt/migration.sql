/*
  Warnings:

  - You are about to drop the column `endereco_id` on the `aluno` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[aluno_id]` on the table `endereco` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aluno_id` to the `endereco` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_endereco_id_fkey";

-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "endereco_id";

-- AlterTable
ALTER TABLE "endereco" ADD COLUMN     "aluno_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "endereco_aluno_id_key" ON "endereco"("aluno_id");

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
