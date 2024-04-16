-- PRACTICA 29 My SQL
-- AlLUMNO; FAUSTO JOSHUA RAMIREZ MEZA  1284721

CREATE DATABASE tienda;
USE tienda;

CREATE TABLE productos (
    Codigo INT NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    precio FLOAT NOT NULL,
    fechaalta DATETIME NOT NULL,
    PRIMARY KEY (Codigo)
);

INSERT INTO productos VALUES (101, 'Estufa', 9700, '2017-03-02');

INSERT INTO productos VALUES (102, 'Lavadora', 8000, '2017-04-02');

INSERT INTO productos VALUES (103, 'Refrigerador', 9200, '2017-01-02');

INSERT INTO productos VALUES (104, 'Blusa para dama', 250, '2017-03-03');

INSERT INTO productos VALUES (105, 'Camisa para caballero', 200, '2017-02-03');

INSERT INTO productos VALUES (106, 'Batidora', 3450, '2017-04-12');

INSERT INTO productos VALUES (107, 'Vestido dama modi', 325.50, '2017-01-11');

SELECT * FROM productos;

SELECT * FROM productos WHERE nombre="Refrigerador";

SELECT * FROM productos WHERE nombre LIKE '8%';

SELECT nombre,precio FROM productos WHERE precio>8000;

ALTER TABLE productos ADD categoria VARCHAR(30);

UPDATE productos SET categoria = 'Linea Blanca' WHERE codigo ='101';
UPDATE productos SET categoria = 'Linea Blanca' WHERE codigo ='102';
UPDATE productos SET categoria = 'Linea Blanca' WHERE codigo ='103';
UPDATE productos SET categoria = 'Ropa' WHERE codigo ='104';
UPDATE productos SET categoria = 'Ropa' WHERE codigo ='105';
UPDATE productos SET categoria = 'Ropa' WHERE codigo ='106';
UPDATE productos SET categoria = 'Linea Blanca' WHERE codigo ='107';

SELECT categoria FROM productos;

SELECT DISTINCT categoria FROM productos;

SELECT categoria, COUNT(*) FROM productos GROUP BY categoria;

--DELETE FROM productos WHERE Codigo='101';

--SELECT categoria FROM productos;

--DROP TABLE productos;