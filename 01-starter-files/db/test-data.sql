USE CHECKIFY;

INSERT INTO USER (USERNAME, PASSWORD, NAME, EMAIL, IS_PREMIUM)
VALUES
("USER1", "USER1", "USER1 NAME","USER1@SDA.EE", 0),
("USER2", "USER2", "USER2 NAME","USER2@SDA.EE", 0),
("USER3", "USER3", "USER3 NAME","USER3@SDA.EE", 1),
("USER4", "USER4", "USER4 NAME","USER4@SDA.EE", 1),
("USER5", "USER5", "USER5 NAME","USER5@SDA.EE", 1),
("USER6", "USER6", "USER6 NAME","USER6@SDA.EE", 1),
("USER7", "USER7", "USER7 NAME","USER7@SDA.EE", 0),
("USER8", "USER8", "USER8 NAME","USER8@SDA.EE", 0);

INSERT INTO FRIDGE (NAME)
VALUES
("WORK"),
("MUM'S"),
("HOME"),
("FRIEND'S"),
("SUMMERHOUSE");

INSERT INTO USER_FRIDGE (USER_ID, FRIDGE_ID)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 3),
(3, 2),
(3, 4),
(5, 3),
(5, 5),
(6, 2),
(7, 4),
(8, 3);

INSERT INTO CATEGORY (NAME)
VALUES
("DRINKS"),
("DAIRY"),
("FRUITS"),
("MEAT"),
("PREPARED FOOD"),
("SWEETS"),
("BREAD");

USE CHECKIFY;
INSERT INTO PRODUCT (BARCODE, NAME, EXPIRE_DATE, DESCRIPTION, IMAGE_URL, CATEGORY_ID, FRIDGE_ID)
VALUES
('3068320014067', 'Evian Water', '2023-07-18','It"s a buddle of water', 'assets/images/products/placeholder.png', 1, 2),
('5060335636225', 'Monster Energy', '2021-07-18','It"s a monster enery drink', 'assets/images/products/placeholder.png',1, 1),
('4740098090557', 'Arctic Sport Zero', '2020-07-19','It"s sugarfree', 'assets/images/products/placeholder.png',1, 2),
('7340131601947', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png',1, 2),
('0613008730734', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png',1, 3),
('4751000750773', 'Circke K Mineral water', '2021-08-27','just some water', 'assets/images/products/placeholder.png',1, 3),
('0041331123327', 'Goya Low Sodium Black Beans', '2025-09-20','Goya Black Beans Low Sodium', 'assets/images/products/placeholder.png',5, 3),
('0039978004567', 'Bob"s Red Mill Bread Mix Cinnamon Raisin Gluten Free', '2020-09-20','Bob"s Red Mill Gluten Free Cinnamon Raisin Bread Mix (22 Ounce)', 'assets/images/products/placeholder.png',7, 2),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'assets/images/products/placeholder.png',7, 2),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'assets/images/products/placeholder.png',7, 4),
('4740466001529', 'Karja rukkileib', '2020-07-25','Island black gold: only rye bread. Farmer"s favorite bread in 2015', 'assets/images/products/placeholder.png',7, 5),
('711403651446', 'Nature"s Own 100% Whole Wheat Bread', '2020-07-27','Nature"s Own 100% Whole Wheat Bread 20 oz. loaf, 2 ct. A1', 'assets/images/products/placeholder.png',7, 3),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'assets/images/products/placeholder.png',7, 2),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'assets/images/products/placeholder.png',7, 3),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'assets/images/products/placeholder.png',7, 4),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'assets/images/products/placeholder.png',7, 1),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'assets/images/products/placeholder.png',7, 2),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'assets/images/products/placeholder.png',7, 3),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'assets/images/products/placeholder.png',7, 4),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'assets/images/products/placeholder.png',7, 5),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30', 'Original Flavor, 1 Resealable 14.3 oz Pack', 'assets/images/products/placeholder.png',6, 1),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'assets/images/products/placeholder.png',6, 2),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'assets/images/products/placeholder.png',6, 3),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'assets/images/products/placeholder.png',6, 4),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'assets/images/products/placeholder.png',6, 5),
('50173976', 'Orbit Winterfresh', '2021-07-20','description not available', 'assets/images/products/placeholder.png', 6, 4);


SELECT * FROM USER;
SELECT * FROM FRIDGE;
SELECT * FROM USER_FRIDGE;
SELECT * FROM CATEGORY;
SELECT * FROM PRODUCT;