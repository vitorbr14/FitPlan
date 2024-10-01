-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "nome_admin" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
