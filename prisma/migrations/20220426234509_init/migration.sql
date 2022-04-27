/*
  Warnings:

  - You are about to drop the column `unitId` on the `Unit` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_unitId_fkey";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "unitId",
ADD COLUMN     "modelId" INTEGER;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
