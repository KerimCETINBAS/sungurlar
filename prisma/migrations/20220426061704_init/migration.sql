/*
  Warnings:

  - You are about to drop the `Machinary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MachinaryToPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MachinaryToUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MachinaryToPart" DROP CONSTRAINT "_MachinaryToPart_A_fkey";

-- DropForeignKey
ALTER TABLE "_MachinaryToPart" DROP CONSTRAINT "_MachinaryToPart_B_fkey";

-- DropForeignKey
ALTER TABLE "_MachinaryToUnit" DROP CONSTRAINT "_MachinaryToUnit_A_fkey";

-- DropForeignKey
ALTER TABLE "_MachinaryToUnit" DROP CONSTRAINT "_MachinaryToUnit_B_fkey";

-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "application" TEXT[];

-- DropTable
DROP TABLE "Machinary";

-- DropTable
DROP TABLE "_MachinaryToPart";

-- DropTable
DROP TABLE "_MachinaryToUnit";

-- CreateTable
CREATE TABLE "Machinery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Machinery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "machineryId" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MachineryToUnit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MachineryToPart" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MachineryToUnit_AB_unique" ON "_MachineryToUnit"("A", "B");

-- CreateIndex
CREATE INDEX "_MachineryToUnit_B_index" ON "_MachineryToUnit"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MachineryToPart_AB_unique" ON "_MachineryToPart"("A", "B");

-- CreateIndex
CREATE INDEX "_MachineryToPart_B_index" ON "_MachineryToPart"("B");

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_machineryId_fkey" FOREIGN KEY ("machineryId") REFERENCES "Machinery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineryToUnit" ADD FOREIGN KEY ("A") REFERENCES "Machinery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineryToUnit" ADD FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineryToPart" ADD FOREIGN KEY ("A") REFERENCES "Machinery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineryToPart" ADD FOREIGN KEY ("B") REFERENCES "Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;
