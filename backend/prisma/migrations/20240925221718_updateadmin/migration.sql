/*
  Warnings:

  - You are about to drop the column `academia_id` on the `admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[admin_id]` on the table `Academia` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "admin" DROP CONSTRAINT "admin_academia_id_fkey";

-- AlterTable
ALTER TABLE "Academia" ADD COLUMN     "admin_id" TEXT;

-- AlterTable
ALTER TABLE "admin" DROP COLUMN "academia_id";

-- CreateIndex
CREATE UNIQUE INDEX "Academia_admin_id_key" ON "Academia"("admin_id");

-- AddForeignKey
ALTER TABLE "Academia" ADD CONSTRAINT "Academia_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
