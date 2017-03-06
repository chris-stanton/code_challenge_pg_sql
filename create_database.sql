-- Database name
CREATE TABLE treats (
id SERIAL PRIMARY KEY,
name VARCHAR(80) NOT NULL,
description VARCHAR(300) NOT NULL,
pic VARCHAR(90)
);

-- Document your create tables SQL here
INSERT INTO treats (name, description, pic)
VALUES ('Pizza', 'Awesome Pizza', '/assets/pizza.png'),
('Donuts', 'Super donuts', '/assets/donuts.jpg');
