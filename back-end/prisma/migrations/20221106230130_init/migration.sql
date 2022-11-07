/*
  Warnings:

  - Added the required column `chave_pix` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `chave_pix` VARCHAR(255) NOT NULL;
