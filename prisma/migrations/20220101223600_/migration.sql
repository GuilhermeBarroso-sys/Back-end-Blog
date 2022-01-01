/*
  Warnings:

  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_category_id_fkey`;

-- DropTable
DROP TABLE `articles`;

-- DropTable
DROP TABLE `categories`;
