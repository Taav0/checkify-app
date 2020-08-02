
INSERT INTO CHECKIFY.USER (USERNAME, PASSWORD, NAME, EMAIL, IS_PREMIUM)
VALUES
('USER1', 'USER1', 'USER1 NAME','USER1@SDA.EE', 0),
('USER2', 'USER2', 'USER2 NAME','USER2@SDA.EE', 0),
('USER3', 'USER3', 'USER3 NAME','USER3@SDA.EE', 1),
('USER4', 'USER4', 'USER4 NAME','USER4@SDA.EE', 1),
('USER5', 'USER5', 'USER5 NAME','USER5@SDA.EE', 1),
('USER6', 'USER6', 'USER6 NAME','USER6@SDA.EE', 1),
('USER7', 'USER7', 'USER7 NAME','USER7@SDA.EE', 0),
('USER8', 'USER8', 'USER8 NAME','USER8@SDA.EE', 0);

INSERT INTO CHECKIFY.FRIDGE (NAME)
VALUES
('WORK'),
('MUM"S'),
('HOME'),
('FRIEND"S'),
('SUMMERHOUSE');

INSERT INTO CATEGORY (NAME)
VALUES
('DRINKS'),
('DAIRY'),
('FRUITS'),
('MEAT'),
('PREPARED FOOD'),
('SWEETS'),
('BREAD');

USE CHECKIFY;
INSERT INTO CHECKIFY.PRODUCT (BARCODE, NAME, EXPIRE_DATE, DESCRIPTION, IMAGE_URL)
VALUES
('3068320014067', 'Evian Water', '2023-07-18','It"s a buddle of water', 'https://www.tastefuldelights.com.au/211015-thickbox_default/Array.jpg'),
('5060335636225', 'Monster Energy', '2021-07-18','It"s a monster enery drink', 'https://m2.kaubamaja.ee/media/catalog/product/cache/1/image/840x/6dcdb3bec3b7d3d8fa2d31ce95a0090e/5/0/5060335636225.jpg'),
('4740098090557', 'Arctic Sport Zero', '2020-07-19','It"s sugarfree', 'https://m1.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740098090557.jpg'),
('7340131601947', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png'),
('0613008730734', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png'),
('4751000750773', 'Circke K Mineral water', '2021-08-27','just some water', 'assets/images/products/placeholder.png'),
('0041331123327', 'Goya Low Sodium Black Beans', '2025-09-20','Goya Black Beans Low Sodium', 'https://m.media-amazon.com/images/I/51L5dN7sdQL.jpg'),
('0039978004567', 'Bob"s Red Mill Bread Mix Cinnamon Raisin Gluten Free', '2020-09-20','Bob"s Red Mill Gluten Free Cinnamon Raisin Bread Mix (22 Ounce)', 'https://i.ebayimg.com/images/g/7-0AAOSwccNdQSOS/s-l225.jpg'),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740103020203.jpg'),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740103020203.jpg'),
('4740466001529', 'Karja rukkileib', '2020-07-25','Island black gold: only rye bread. Farmer"s favorite bread in 2015', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740466001529.jpg'),
('711403651446', 'Nature"s Own 100% Whole Wheat Bread', '2020-07-27','Nature"s Own 100% Whole Wheat Bread 20 oz. loaf, 2 ct. A1', 'assets/images/products/placeholder.png'),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg'),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg'),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30', 'Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('50173976', 'Orbit Winterfresh', '2021-07-20','description not available', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/5/0/50173976.jpg');
