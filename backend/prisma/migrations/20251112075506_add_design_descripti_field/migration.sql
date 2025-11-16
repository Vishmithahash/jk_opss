/*
  Warnings:

  - You are about to drop the column `design_description` on the `jk_ops_aw_concept` table. All the data in the column will be lost.
  - You are about to alter the column `requested_date` on the `jk_ops_aw_concept` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `required_date` on the `jk_ops_aw_concept` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `jk_ops_aw_concept` DROP COLUMN `design_description`,
    ADD COLUMN `design_descript` TEXT NULL,
    ADD COLUMN `design_descripti` TEXT NULL,
    MODIFY `requested_date` DATETIME NULL,
    MODIFY `required_date` DATETIME NULL;
