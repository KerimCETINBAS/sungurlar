/*
  Warnings:

  - A unique constraint covering the columns `[unitId]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "unitId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Model_unitId_key" ON "Model"("unitId");

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
