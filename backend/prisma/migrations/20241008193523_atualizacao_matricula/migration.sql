/*
  Warnings:

  - Added the required column `inicio` to the `matricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matricula" ADD COLUMN     "inicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
