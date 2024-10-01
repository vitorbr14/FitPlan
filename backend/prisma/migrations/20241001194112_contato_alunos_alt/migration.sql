-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_aluno_id_fkey";

-- AlterTable
ALTER TABLE "contato" ALTER COLUMN "aluno_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;
