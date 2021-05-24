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
Para la generación de datos se hizo uso de la herramienta Mockaroo y mediante un llamado a la API se obtienen los datos y posteriormente se almacenan en el archivos **fixtures/mockaroo.json** Para hacer esto posible se creó una cuenta en Mockaroo, se definió un Schema con diferentes campos y tipos de datos, además, se realizo la creación de la respectiva [API](https://my.api.mockaroo.com/data.json?key=fae49f20). Antes de iniciar la ejecución de los escenarios se lee el archivo mockaroo.json y se almacena en un array y cada vez que se ejecuta un escenario se genera un numero aleatorio de la longitud del array, el cual indica la posición de los datos que serán usados.

![image](https://github.com/coandrade/TallerEstrategiaDatos/blob/main/Cypress/imagen/api.PNG)



# (iii) escenario aleatorio.


# Contenido del repositorio.
El presente repositorio contiene un proyecto Cypress, en su interior puede ubicarse las siguientes carpetas:




# Instrucciones de instalación.
1. Instalar la versión 3.42.5 de ghost.  En el siguiente enlace podrá encontrar un tutorial que servirá de guía: https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/gjD9z/como-desplegar-ghost-de-forma-local
2. Inicie ghost. Desde el sitio del administrador cree el siguiente usuario:

|Correo|Clave|
|--|--|
|m.leguizamong@uniandes.edu.co|123456789!|

3. Instalar cypress. En el siguiente enlace podrá encontrar un tutorial que servirá de guía: https://misovirtual.virtual.uniandes.edu.co/codelabs/cypress-tutorial/index.html#1
4. Descargue el repositorio del código en su máquina. Desde powershell ingrese el siguiente comando: git clone https://github.com/coandrade/TallerEstrategiaDatos.git
5. Dentro de la ruta escogida para contener el código del paso anterior y desde powershell ubíquese en el siguiente directorio : Sistema-de-TSDC/Cypress/Pruebas_V3.4.25/
6. Ejecute el comando cypress open. Le aparecerá una imagen como la siguiente: 
![image](https://user-images.githubusercontent.com/78806424/118421599-0a06f380-b687-11eb-9b93-beceafadb1f4.png)
7. Haga clic en cada enlace teniendo en cuenta el orden de numeración para ejecutar las pruebas. Al finlizar la ejecución verá una pantalla como la siguiente: 
![image](https://user-images.githubusercontent.com/78806424/118431236-77248400-b69b-11eb-843c-57c5bd124db9.png)
8. Cada carpeta contiene los escenarios implementados de acuerdo a la estrategia de pruebas señalada en su carpeta contenedora.  Para configura el proyecto en ambiente de instalación, siga el siguiente procedimiento:
9. Ejecute el comando "npm install faker"
10. Ejecute el comando "./node_modules/.bin/cypress open". 
11. El comando anterior desplegará la consola de Cypress y en su interior, cada uno de los escenarios generados.
12. Ingrese a la carpeta "a-priori" y ejecute cualquiera de los archivos desplegados.
13. Ingrese a la carpeta "pseudo-aleatorio" y ejecute cualquiera de los archivos desplegados.
14. Ingrese a la carpeta "" y ejecute cualquiera de los archivos desplegados.



