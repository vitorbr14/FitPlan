-- AlterTable
ALTER TABLE "treinoaluno" ADD COLUMN     "inicio_treino" TIMESTAMP(3),
ADD COLUMN     "objetivo_id" INTEGER,
ADD COLUMN     "vencimento_treino" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "objetivos" (
    "id" SERIAL NOT NULL,
    "objetivo" TEXT NOT NULL,

    CONSTRAINT "objetivos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "treinoaluno" ADD CONSTRAINT "treinoaluno_objetivo_id_fkey" FOREIGN KEY ("objetivo_id") REFERENCES "objetivos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
