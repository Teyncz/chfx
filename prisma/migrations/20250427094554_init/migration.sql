-- CreateTable
CREATE TABLE `CurrenciesTicks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currency` VARCHAR(191) NOT NULL,
    `close` DECIMAL(65, 30) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
