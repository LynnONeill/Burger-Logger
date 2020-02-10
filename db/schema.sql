DROP DATABASE IF EXISTS burger_logger;
CREATE DATABASE burger_logger;

USE burger_logger;

CREATE TABLE burgers (
    burger_id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
    eaten BOOLEAN DEFAULT false,
    name VARCHAR(45) NOT NULL
);

