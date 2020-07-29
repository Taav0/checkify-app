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
	name varchar(150) null,
	fridge_id bigint null,
	category_id bigint null,
	constraint FK1mtsbur82frn64de7balymq9s
		foreign key (category_id) references category (id),
	constraint FKeqwyl26xhcbu1l16u5gkg5hx0
		foreign key (fridge_id) references fridge (id)
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

create table if not exists `CHECKIFY`.`user_fridge`
(
	fridge_id bigint not null,
	user_id bigint not null,
	primary key (fridge_id, user_id),
	constraint FK8511hcb3kg8df04kgyc37kkqo
		foreign key (user_id) references user (id),
	constraint FKnms6ne0881bgwxrdka38qanpw
		foreign key (fridge_id) references fridge (id)
);
