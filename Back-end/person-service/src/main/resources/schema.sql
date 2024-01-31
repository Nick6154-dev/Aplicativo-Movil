CREATE TABLE IF NOT EXISTS persona
(
    id             INT PRIMARY KEY,
    nombres        VARCHAR(255),
    apellidos      VARCHAR(255),
    correo         VARCHAR(255),
    identificacion VARCHAR(255)
);

INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (1, 'Pablo', 'Balseca', 'correo1@correo1.com', '1751157593');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (2, 'Juan', 'Pérez', 'correo2@correo2.com', '1234567890');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (3, 'María', 'González', 'correo3@correo3.com', '2345678901');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (4, 'Carlos', 'Rodríguez', 'correo4@correo4.com', '3456789012');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (5, 'Ana', 'Martínez', 'correo5@correo5.com', '4567890123');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (6, 'Pedro', 'García', 'correo6@correo6.com', '5678901234');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (7, 'Teresa', 'López', 'correo7@correo7.com', '6789012345');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (8, 'Javier', 'Hernández', 'correo8@correo8.com', '7890123456');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (9, 'Carmen', 'Torres', 'correo9@correo9.com', '8901234567');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (10, 'Luis', 'Ramírez', 'correo10@correo10.com', '9012345678');
INSERT INTO persona (id, nombres, apellidos, correo, identificacion)
VALUES (11, 'Sofía', 'Morales', 'correo11@correo11.com', '0123456789');