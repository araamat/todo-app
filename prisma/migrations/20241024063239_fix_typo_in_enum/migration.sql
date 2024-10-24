/*
  Warnings:

  - The values [IN_PPROGRESS] on the enum `todos_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `todos` MODIFY `status` ENUM('TODO', 'IN_PROGRESS', 'DONE') NOT NULL;
