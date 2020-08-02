/*CREATE USER IF NOT EXISTS 'final-project'@'localhost' IDENTIFIED BY 'Checkify';
GRANT ALL PRIVILEGES ON * . * TO 'final-project'@'localhost';

ALTER USER 'final-project'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Checkify';
*/


create table if not exists `CHECKIFY`.`category`
(
	id bigint auto_increment
		primary key,
	name varchar(100) null
);

create table if not exists `CHECKIFY`.`fridge`
(
	id bigint auto_increment
		primary key,
	name varchar(100) null
);

create table if not exists `CHECKIFY`.`product`
(
	id bigint auto_increment
		primary key,
	barcode varchar(20) null,
	expire_date datetime(6) null,
	description varchar(255) null,
	image_url varchar(255) null,
	name varchar(150) null
);

create table if not exists `CHECKIFY`.`user`
(
	id bigint auto_increment
		primary key,
	email varchar(100) null,
	is_premium bit null,
	name varchar(100) null,
	password varchar(100) null,
	username varchar(100) null
);

