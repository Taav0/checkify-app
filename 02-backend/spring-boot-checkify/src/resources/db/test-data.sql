INSERT INTO USER (USERNAME, PASSWORD, NAME, EMAIL, IS_PREMIUM)
VALUES
("USER1", "USER1", "USER1 NAME","USER1@SDA.EE", 0),
("USER2", "USER2", "USER2 NAME","USER2@SDA.EE", 0),
("USER3", "USER3", "USER3 NAME","USER3@SDA.EE", 1),
("USER4", "USER4", "USER4 NAME","USER4@SDA.EE", 1);

INSERT INTO FRIDGE (NAME)
VALUES
("WORK"),
("MUM'S"),
("HOME"),
("SUMMERHOUSE");

INSERT INTO USER_FRIDGE (USER_ID, FRIDGE_ID)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 3),
(2, 4),
(3, 2),
(4, 1);

SELECT * FROM USER;
SELECT * FROM FRIDGE;
SELECT * FROM USER_FRIDGE;