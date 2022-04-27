-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_machineryId_fkey";

-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "machineryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_machineryId_fkey" FOREIGN KEY ("machineryId") REFERENCES "Machinery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
