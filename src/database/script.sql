create database insightTrip;
use insightTrip;

create user 'API'@'localhost' identified by 'webDataViz0API';
grant insert, select, update on insightTrip.* to 'API'@'localhost';
show grants for 'API'@'localhost';

create table usuario (
id int primary key auto_increment,
email varchar(225),
senha varchar(100),
nome varchar(45),
telefone char(11),
cpf char(11)
);

insert into usuario values
(default, 'admin', md5('admin'), 'Admin', '12345678901', '12345678901'),
(default, 'felps@email.com', md5('felps'), 'Felpinho', '12345678901', '12345678901');

select * from usuario;

-- DROP USER 'API'@'localhost'; --
-- DROP DATABASE insightTrip--