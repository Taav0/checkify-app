DROP DATABASE IF EXISTS CHECKIFY;
CREATE DATABASE CHECKIFY;
USE CHECKIFY;
#if you get global timezone error while running this, uncomment the next line, should help (triin)
#SET GLOBAL time_zone = '+3:00';

CREATE TABLE USER(
    ID INT AUTO_INCREMENT,
    USERNAME VARCHAR(100),
    PASSWORD VARCHAR(100),
    NAME VARCHAR(100),
    EMAIL VARCHAR(100),
    IS_PREMIUM BOOLEAN,
    PRIMARY KEY (ID)
);

CREATE TABLE FRIDGE(
    ID INT AUTO_INCREMENT,
    NAME VARCHAR(100),
    PRIMARY KEY (ID)
);

CREATE TABLE USER_FRIDGE(
    USER_ID INT,
    FRIDGE_ID INT,
    FOREIGN KEY (USER_ID) REFERENCES USER (ID) ON DELETE CASCADE,
    FOREIGN KEY (FRIDGE_ID) REFERENCES USER (ID) ON DELETE CASCADE
);