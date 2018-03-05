CREATE DATABASE IF NOT EXISTS stargazer;

USE stargazer;

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT,
    email VARCHAR(35) NOT NULL,
    password VARCHAR(60) NOT NULL,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    status VARCHAR(35) NOT NULL DEFAULT 'active',
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT,
    title VARCHAR(35) NOT NULL,
    description VARCHAR(150) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    address VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT,
    title VARCHAR(35) NOT NULL,
    description VARCHAR(150) NOT NULL,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    address VARCHAR(100),
    PRIMARY KEY (id)
);