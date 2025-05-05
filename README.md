# Prueba Tecnica Angular - Jordan Isaac
# -------------------------------------------------------
# Requisitos previos y paso a paso 
 - Node.js version +16.X.X o superior
 - Angular CLI version +19.X.X o superior


## 1 - Ejecutar "npm install" para tener las dependencias necesarias.

## 2 - Buildeamos el proyecto con "ng build".

## 3 - Ejecutar "ng serve" para iniciar la aplicacion en el navegador. 

- Una vez ejecutado los comandos necesarios e instalado las dependencias requeridas podemos observar la aplicacion en : http://localhost:4200

## Finalidad del Proyecto 

- Este proyecto permite filtar por nombre o ciudad una lista de usuarios de " https://jsonplaceholder.typicode.com/users "
- El proyecto intenta mantener una estructura limpia, es por eso que se intenta manejar el enrutamiento unicamente desde los componentes de app

# Funcionalidades 

- Paginación: La tabla muestra un número limitado de usuarios por página (10 usuarios por defecto) con la opción de cambiar el número de filas por página (5, 10, 20).
- Filtrado: Los usuarios pueden ser filtrados por nombre o ciudad utilizando un campo de búsqueda.
