/*
  Warnings:

  - You are about to drop the column `application` on the `Part` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Part" DROP COLUMN "application";

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "src" TEXT,
    "alt" TEXT,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);
