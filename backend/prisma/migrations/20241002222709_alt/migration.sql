-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_estado_civil_id_fkey";

-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_sexo_id_fkey";

-- AlterTable
ALTER TABLE "aluno" ALTER COLUMN "estado_civil_id" DROP NOT NULL,
ALTER COLUMN "sexo_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_estado_civil_id_fkey" FOREIGN KEY ("estado_civil_id") REFERENCES "EstadoCivil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_sexo_id_fkey" FOREIGN KEY ("sexo_id") REFERENCES "sexo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
