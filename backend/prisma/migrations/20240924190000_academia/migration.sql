/*
  Warnings:

  - Added the required column `academia_id` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "academia_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
