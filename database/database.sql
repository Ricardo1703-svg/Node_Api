CREATE DATABASE firstapi

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    email TEXT
);

INSERT INTO users (nombre,email) VALUES
('Ricardo', 'ricardo@gmail.com'),
('Juan', 'juan@gmail.com');