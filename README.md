# Taller  Estrategia Datos Semana 7

# Estudiantes
Nuestro equipo está conformado por 3 integrantes. Trabajamos 120 escenarios utilizando las estrategias analizadas en la semana 7.
|Nombre |Correo|
|--|--|
|Cesar Andrade |co.andrade86@uniandes.edu.co|
|Wilson Beltran |w.beltran@uniandes.edu.co|
|Marby Leguizamón|m.leguizamong@uniandes.edu.co|

# Funcionalidades
- Login
- Agregar post 
- Editar post
- Publicar post
- Revertir publicación de post
- Borrar post
- Crear tags
- Editar tags
- Borrar tags
- Editar usuario
- Invitar usuarios
- Suspender usuario

Para la presente entrega se implementaron:

 - 40 Escenarios con estrategia pool de datos a-priori
 - 40 Escenarios con estrategia pool de datos (pseudo) aleatorio dinámico 
 - 40 Escenarios con estrategia escenario aleatorio.

con la herramienta:
# Cypress
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

A continuación, se detallan las estrategias utilizadas para la generación de datos en los escenenarios elaborados:

(i) pool de datos a-priori, (ii) pool de datos (pseudo) aleatorio dinámico y (iii) escenario aleatorio.

# (i) pool de datos a-priori.
Para la generación previa de datos, se utilizó el sitio https://www.mockaroo.com/ estableciendo una plantilla de tipos de datos requeridos, posteriormente se generó un archivo json con 100 registros en total fueron 8 archivos y este fue ubicado dentro del proyecto cypress.  En cada caso de pruebas implementado, se importó el mencionado archivo haciendo uso aleatario de los registros allí encontrados.

 - MOCK_DATA_CLAVES.json
 - MOCK_DATA_EMAIL.json
 - MOCK_DATA_ESPECIAL.json
 - MOCK_DATA_LOGIN.json
 - MOCK_DATA_NULL.json
 - MOCK_DATA_NUMEROS.json
 - MOCK_DATA_TEXTOLARGO.json
 - MOCK_DATA_USUARIO.json

# (ii) pool de datos (pseudo) aleatorio dinámico.
Para la generación pseudo aleatoria de datos, se utilizó el generador de datos Mockaroo para que sean obtenidos desde una interfaz de tipo API. Para esto se creo una cuenta en Mockaroo se creo un schema por cada caso de prueba. En el schema se coloca el nombre del campo y el tipo de campo con el que se quiere llenar el caso de prueba y la cantidad de registros (100 registros). Después de guardar el schema se genera el API donde me genera una URL.

Esta URL se utiliza en cada caso de prueba cypres, al obtener el response del api su body lo guardo en un array. También se genera un numero aleatorio de la longitud del array y este numero se utiliza como posicion del array para obtener el valor.

# (iii) escenario aleatorio.
Para la generación aleatoria de datos, se utilizó la herramienta faker importando la librería en cada uno de los archivos donde se implementaron los 40 casos de pruebas mencionados.  De acuerdo a las entradas del escenario de prueba a validar, se hacía uso de los métodos expuestos por la librería faker: word, words, parrafo, parrafos, correo, etc.

# Contenido del repositorio.
El presente repositorio contiene un proyecto Cypress, en su interior puede ubicarse las siguientes carpetas:


# Instrucciones de instalación.
Cada carpeta contiene 40 casos de preueba implementados de acuerdo a la estrategia de pruebas señalada en su carpeta contenedora.  Para configura el proyecto en ambiente de instalación, siga el siguiente procedimiento:

1. A través de una consola, genere una carpeta para descargar el proyecto.
2. Ingrese a la carpeta creada, clone el repositorioa través del  comando "git clone ".
3. Ingrese con una consola a la carpeta "".
4. Ejecute el comando "npm install cypress"
5. Ejecute el comando "npm install faker"
6. Ejecute el comando "./node_modules/.bin/cypress open"
7. El comando anterior desplegará la consolta de Cypress y en su interior, cada uno de los casos de prueba generados.
8. Ingrese a la carpeta "" y ejecute cualquiera de los archivos desplegados.
9. Ingrese a la carpeta "" y ejecute cualquiera de los archivos desplegados.
10. Ingrese a la carpeta "" y ejecute cualquiera de los archivos desplegados.



