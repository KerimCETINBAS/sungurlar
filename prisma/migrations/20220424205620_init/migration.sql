-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('USD', 'TL', 'EUR');

-- CreateTable
CREATE TABLE "Customer" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("firstName","lastName")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT,
    "province" TEXT,
    "town" TEXT,
    "no" TEXT,
    "postCode" TEXT,
    "street" TEXT,
    "building" TEXT,
    "doorNo" TEXT,
    "customerFirstName" TEXT NOT NULL,
    "customerLastName" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "customerFirstName" TEXT NOT NULL,
    "customerLastName" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "serialNo" TEXT[],
    "categoryId" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceType" "PriceType" NOT NULL DEFAULT E'TL',
    "details" TEXT[],
    "description" TEXT NOT NULL,
    "referances" INTEGER[],
    "saleId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_customerFirstName_customerLastName_key" ON "Address"("customerFirstName", "customerLastName");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_customerFirstName_customerLastName_fkey" FOREIGN KEY ("customerFirstName", "customerLastName") REFERENCES "Customer"("firstName", "lastName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customerFirstName_customerLastName_fkey" FOREIGN KEY ("customerFirstName", "customerLastName") REFERENCES "Customer"("firstName", "lastName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
