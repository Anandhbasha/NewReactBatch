create Database flaskCrud;

use flaskCrud;

create table students( 
id int primary key auto_increment,
name varchar(100) not null,
email varchar(100) not null,
age int
);