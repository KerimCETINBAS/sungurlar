/*
  Warnings:

  - A unique constraint covering the columns `[machineryId]` on the table `Images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[partId]` on the table `Images` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "machineryId" INTEGER,
ADD COLUMN     "partId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Images_machineryId_key" ON "Images"("machineryId");

-- CreateIndex
CREATE UNIQUE INDEX "Images_partId_key" ON "Images"("partId");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_machineryId_fkey" FOREIGN KEY ("machineryId") REFERENCES "Machinery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;
