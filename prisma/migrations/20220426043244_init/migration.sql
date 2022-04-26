/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Expense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Manufacturer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_manufacturerId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_saleId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_customerFirstName_customerLastName_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Expense";

-- DropTable
DROP TABLE "Manufacturer";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Sale";

-- CreateTable
CREATE TABLE "Machinary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Machinary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MachinaryToUnit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MachinaryToPart" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PartToUnit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MachinaryToUnit_AB_unique" ON "_MachinaryToUnit"("A", "B");

-- CreateIndex
CREATE INDEX "_MachinaryToUnit_B_index" ON "_MachinaryToUnit"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MachinaryToPart_AB_unique" ON "_MachinaryToPart"("A", "B");

-- CreateIndex
CREATE INDEX "_MachinaryToPart_B_index" ON "_MachinaryToPart"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PartToUnit_AB_unique" ON "_PartToUnit"("A", "B");

-- CreateIndex
CREATE INDEX "_PartToUnit_B_index" ON "_PartToUnit"("B");

-- AddForeignKey
ALTER TABLE "_MachinaryToUnit" ADD FOREIGN KEY ("A") REFERENCES "Machinary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachinaryToUnit" ADD FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachinaryToPart" ADD FOREIGN KEY ("A") REFERENCES "Machinary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachinaryToPart" ADD FOREIGN KEY ("B") REFERENCES "Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToUnit" ADD FOREIGN KEY ("A") REFERENCES "Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToUnit" ADD FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
