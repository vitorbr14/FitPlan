-- DropForeignKey
ALTER TABLE "admin" DROP CONSTRAINT "admin_academia_id_fkey";

-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "academia_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
