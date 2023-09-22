CREATE TABLE datos_cliente(
	id_cliente int  NOT NULL PRIMARY KEY,
	nombre_cliente VARCHAR (150) NOT NULL,
	apellidos_cliente VARCHAR (150) NOT NULL,
	edad_cliente int NOT NULL,
	telefono     int NOT NULL,
	direccion  VARCHAR (150) NOT NULL
);

CREATE TABLE procurador(
	id_profesional_procu int NOT NULL PRIMARY KEY,
	nombre_procurador  VARCHAR(150) NOT NULL,
	apellido_procurador  VARCHAR(150) NOT NULL,
	edad_procurador int NOT NULL,
	años_experi_procu int NOT NULL
);

CREATE TABLE asunto(
	id_caso int NOT NULL UNIQUE ,
	id_cliente int  NOT NULL,
	id_profesional_procu int NOT NULL,
	fecha_inicio date,
	fecha_final  date,
	estado  VARCHAR (150) NOT NULL,
	FOREIGN KEY(id_cliente)REFERENCES datos_cliente(id_cliente),
	FOREIGN KEY (id_profesional_procu) REFERENCES procurador(id_profesional_procu),
	PRIMARY KEY(id_caso,id_cliente,id_profesional_procu)
);