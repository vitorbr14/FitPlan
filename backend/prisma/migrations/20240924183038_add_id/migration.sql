/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `aluno` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "admin" DROP CONSTRAINT "admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "aluno_pkey" PRIMARY KEY ("id");
