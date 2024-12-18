-- CreateTable
CREATE TABLE "contato" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "isWpp" BOOLEAN NOT NULL,
    "aluno_id" INTEGER NOT NULL,

    CONSTRAINT "contato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
