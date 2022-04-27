/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Model` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Model_name_key" ON "Model"("name");
