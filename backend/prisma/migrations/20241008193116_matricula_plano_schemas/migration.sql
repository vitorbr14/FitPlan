-- CreateTable
CREATE TABLE "plano" (
    "id" SERIAL NOT NULL,
    "plano" TEXT NOT NULL,
    "plano_price" TEXT NOT NULL,

    CONSTRAINT "plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matricula" (
    "id" SERIAL NOT NULL,
    "aluno_id" INTEGER NOT NULL,
    "academia_id" INTEGER NOT NULL,
    "plano_id" INTEGER NOT NULL,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "matricula_aluno_id_key" ON "matricula"("aluno_id");

-- CreateIndex
CREATE UNIQUE INDEX "matricula_academia_id_key" ON "matricula"("academia_id");

-- CreateIndex
CREATE UNIQUE INDEX "matricula_plano_id_key" ON "matricula"("plano_id");

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_plano_id_fkey" FOREIGN KEY ("plano_id") REFERENCES "plano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
