/*
  Warnings:

  - You are about to drop the `_MachineryToPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MachineryToUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MachineryToPart" DROP CONSTRAINT "_MachineryToPart_A_fkey";

-- DropForeignKey
ALTER TABLE "_MachineryToPart" DROP CONSTRAINT "_MachineryToPart_B_fkey";

-- DropForeignKey
ALTER TABLE "_MachineryToUnit" DROP CONSTRAINT "_MachineryToUnit_A_fkey";

-- DropForeignKey
ALTER TABLE "_MachineryToUnit" DROP CONSTRAINT "_MachineryToUnit_B_fkey";

-- DropTable
DROP TABLE "_MachineryToPart";

-- DropTable
DROP TABLE "_MachineryToUnit";
