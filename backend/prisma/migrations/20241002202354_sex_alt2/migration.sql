/*
  Warnings:

  - You are about to drop the column `aluno_id` on the `sexo` table. All the data in the column will be lost.
  - Added the required column `sexo_id` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sexo" DROP CONSTRAINT "sexo_aluno_id_fkey";

-- DropIndex
DROP INDEX "sexo_aluno_id_key";

-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "sexo_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sexo" DROP COLUMN "aluno_id";

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_sexo_id_fkey" FOREIGN KEY ("sexo_id") REFERENCES "sexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
