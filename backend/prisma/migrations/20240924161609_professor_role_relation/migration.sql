/*
  Warnings:

  - Added the required column `role_id` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "role_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
