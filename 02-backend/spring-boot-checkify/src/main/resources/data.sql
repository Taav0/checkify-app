
INSERT INTO CHECKIFY.CUSTOMER (CUSTOMER_NAME, PASSWORD, NAME, EMAIL, IS_PREMIUM)
VALUES
('USER1', 'USER1', 'USER1 NAME','USER1@SDA.EE', 0),
('USER2', 'USER2', 'USER2 NAME','USER2@SDA.EE', 1);


INSERT INTO CHECKIFY.FRIDGE (NAME)
VALUES
('WORK'),
('MUM"S');

INSERT INTO CHECKIFY.CUSTOMER_FRIDGE (CUSTOMER_ID, FRIDGE_ID)
VALUES
(1, 1),
(1, 2),
(2, 1);


INSERT INTO CATEGORY (NAME)
VALUES
('DRINKS'),
('DAIRY'),
('FRUITS'),
('MEAT'),
('PREPARED FOOD'),
('SWEETS'),
('BREAD');

INSERT INTO CHECKIFY.PRODUCT (BARCODE, NAME, DESCRIPTION, IMAGE_URL)
VALUES
('3068320014067', 'Evian Water', null,'https://www.tastefuldelights.com.au/211015-thickbox_default/Array.jpg'),
('5060335636225', 'Monster Energy', null, 'https://m2.kaubamaja.ee/media/catalog/product/cache/1/image/840x/6dcdb3bec3b7d3d8fa2d31ce95a0090e/5/0/5060335636225.jpg'),
('4740098090557', 'Arctic Sport Zero', null, 'https://m1.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740098090557.jpg'),
('7340131601947', 'Limon', null, 'assets/images/products/placeholder.png'),
('4751000750773', 'Circke K Mineral water', null, 'assets/images/products/placeholder.png'),
('0041331123327', 'Goya Low Sodium Black Beans',null, 'https://m.media-amazon.com/images/I/51L5dN7sdQL.jpg'),
('0039978004567', 'Bob"s Red Mill Bread Mix Cinnamon Raisin Gluten Free',null, 'https://i.ebayimg.com/images/g/7-0AAOSwccNdQSOS/s-l225.jpg'),
('4740103020203', 'FAZER black bread', null, 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740103020203.jpg'),
('4740466001529', 'Karja rukkileib', null, 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740466001529.jpg'),
('711403651446', 'Nature"s Own 100% Whole Wheat Bread',null, 'assets/images/products/placeholder.png'),
('0026400297000', 'Darigold Milk', null, 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg'),
('4740572003165', 'Traditsiooniline Eesti juust',null, 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg'),
('0044000032029', 'OREO Chocolate Sandwich Cookies',null, 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg'),
('50173976', 'Orbit Winterfresh', null, 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/5/0/50173976.jpg');

INSERT INTO CHECKIFY.PRODUCT_LIST (BARCODE, NAME, EXPIRE_DATE, DESCRIPTION, IMAGE_URL, CATEGORY_ID, FRIDGE_ID)
VALUES
('3068320014067', 'Evian Water', '2023-07-18','It"s a buddle of water', 'https://www.tastefuldelights.com.au/211015-thickbox_default/Array.jpg', 1, 2),
('5060335636225', 'Monster Energy', '2021-07-18','It"s a monster enery drink', 'https://m2.kaubamaja.ee/media/catalog/product/cache/1/image/840x/6dcdb3bec3b7d3d8fa2d31ce95a0090e/5/0/5060335636225.jpg',1, 1),
('4740098090557', 'Arctic Sport Zero', '2020-07-19','It"s sugarfree', 'https://m1.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740098090557.jpg',1, 2),
('7340131601947', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png',1, 2),
('0613008730734', 'Limon', '2020-08-18','smells like Gin', 'assets/images/products/placeholder.png',1, 1),
('4751000750773', 'Circke K Mineral water', '2021-08-27','just some water', 'assets/images/products/placeholder.png',1, 2),
('0041331123327', 'Goya Low Sodium Black Beans', '2025-09-20','Goya Black Beans Low Sodium', 'https://m.media-amazon.com/images/I/51L5dN7sdQL.jpg',5, 2),
('0039978004567', 'Bob"s Red Mill Bread Mix Cinnamon Raisin Gluten Free', '2020-09-20','Bob"s Red Mill Gluten Free Cinnamon Raisin Bread Mix (22 Ounce)', 'https://i.ebayimg.com/images/g/7-0AAOSwccNdQSOS/s-l225.jpg',7, 2),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740103020203.jpg',7, 2),
('4740103020203', 'FAZER black bread', '2020-08-18','Sweet and sour bread from dark rye and wheat flour.', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740103020203.jpg',7, 1),
('4740466001529', 'Karja rukkileib', '2020-07-25','Island black gold: only rye bread. Farmer"s favorite bread in 2015', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740466001529.jpg',7, 1),
('711403651446', 'Nature"s Own 100% Whole Wheat Bread', '2020-07-27','Nature"s Own 100% Whole Wheat Bread 20 oz. loaf, 2 ct. A1', 'assets/images/products/placeholder.png',7, 1),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg',7, 2),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg',7, 1),
('0026400297000', 'Darigold Milk', '2020-08-02','Darigold Milk, Fat Free, Ultra Pasteurized, 1 Quart', 'https://images.upc.guide/gtin/gtin-030/0300312234132.jpg',7, 2),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg',7, 1),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg',7, 2),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg',7, 1),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg',7, 2),
('4740572003165', 'Traditsiooniline Eesti juust', '2020-08-30','Cylindrical Dutch type rennet cheese. The best-known quality cheese in Estonia, which has been produced since 1958.', 'https://www.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740572000102.jpg',7, 2),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30', 'Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg',6, 1),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg',6, 2),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg',6, 1),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg',6, 1),
('0044000032029', 'OREO Chocolate Sandwich Cookies','2020-08-30','Original Flavor, 1 Resealable 14.3 oz Pack', 'https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._UL320_.jpg',6, 1),
('50173976', 'Orbit Winterfresh', '2021-07-20','description not available', 'https://m1.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/5/0/50173976.jpg', 6, 2);
