/*
  Warnings:

  - You are about to drop the column `unitId` on the `Model` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[unitId]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_unitId_fkey";

-- DropIndex
DROP INDEX "Model_unitId_key";

-- AlterTable
ALTER TABLE "Model" DROP COLUMN "unitId";

-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "unitId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Unit_unitId_key" ON "Unit"("unitId");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
