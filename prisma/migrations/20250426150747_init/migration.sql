-- CreateTable
CREATE TABLE `Currencies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currency` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NULL,

    UNIQUE INDEX `Currencies_currency_key`(`currency`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
