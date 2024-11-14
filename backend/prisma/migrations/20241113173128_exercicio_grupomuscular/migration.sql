-- CreateTable
CREATE TABLE "exercicio" (
    "id" SERIAL NOT NULL,
    "nome_exercicio" TEXT NOT NULL,
    "grupo_muscular" INTEGER NOT NULL,

    CONSTRAINT "exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupomuscular" (
    "id" SERIAL NOT NULL,
    "nome_grupo" TEXT NOT NULL,

    CONSTRAINT "grupomuscular_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "exercicio" ADD CONSTRAINT "exercicio_grupo_muscular_fkey" FOREIGN KEY ("grupo_muscular") REFERENCES "grupomuscular"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
