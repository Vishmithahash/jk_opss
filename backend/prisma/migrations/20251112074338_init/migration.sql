-- CreateTable
CREATE TABLE `jk_ops_aw_concept` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `requested_by` INTEGER NULL,
    `requested_date` DATETIME(3) NULL,
    `required_date` DATETIME(3) NULL,
    `artwork_type` VARCHAR(15) NULL,
    `jobtype` VARCHAR(15) NULL,
    `previous_design` VARCHAR(15) NULL,
    `design_category` VARCHAR(15) NULL,
    `print_category` VARCHAR(15) NULL,
    `pattern_number` VARCHAR(15) NULL,
    `pattern_name` VARCHAR(15) NULL,
    `client_name` TEXT NULL,
    `template_type` VARCHAR(15) NULL,
    `design_description` TEXT NULL,
    `name` VARCHAR(3) NULL,
    `numbers` VARCHAR(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
