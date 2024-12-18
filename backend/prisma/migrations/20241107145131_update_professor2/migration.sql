-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_academia_id_fkey";

-- AlterTable
ALTER TABLE "Professor" ALTER COLUMN "academia_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_academia_id_fkey" FOREIGN KEY ("academia_id") REFERENCES "Academia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
