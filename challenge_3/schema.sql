DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(50) NULL DEFAULT NULL,
  `addressone` VARCHAR(100) NULL DEFAULT NULL,
  `addresstwo` VARCHAR(100) NULL DEFAULT NULL,
  `city` VARCHAR(50) NULL DEFAULT NULL,
  `state` VARCHAR(25) NULL DEFAULT NULL,
  `zip` VARCHAR(5) NULL DEFAULT NULL,
  `phone` VARCHAR(25) NULL DEFAULT NULL,
  `ccnum` VARCHAR(20) NULL DEFAULT NULL,
  `expiry` VARCHAR(4) NULL DEFAULT NULL,
  `ccv` VARCHAR(3) NULL DEFAULT NULL,
  `billingzip` VARCHAR(5) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`username`,`email`,`password`) VALUES
-- ('','','','');

