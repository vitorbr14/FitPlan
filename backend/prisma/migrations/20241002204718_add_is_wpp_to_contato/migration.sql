/*
  Warnings:

  - You are about to drop the column `isWpp` on the `contato` table. All the data in the column will be lost.
  - Added the required column `iswpp` to the `contato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contato" DROP COLUMN "isWpp",
ADD COLUMN     "iswpp" BOOLEAN NOT NULL;
