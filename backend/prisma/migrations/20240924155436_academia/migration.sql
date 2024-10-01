-- CreateTable
CREATE TABLE "Academia" (
    "id" SERIAL NOT NULL,
    "nome_academia" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Academia_pkey" PRIMARY KEY ("id")
);
