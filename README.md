# ServerCoderhouse

Desafio 1:
En este desafio se crearon las clases UsersManager y ProductsManager en sus respectivos archivos para la gestion de distintos datos.

La clase ProductsManager cuenta con las propiedades id, title, photo, category, price y stock.
La clase UsersManager cuenta con las propiedades id, photo, email, password y role.

El id se genera de forma automatica y es autoincrementable. El resto de las propiedades deben agregarse a traves del metodo create, en el que todos los campos son obligatorios.

Para poder ver los elementos creados se debe utilizar el read, que devuelve un array con los productos y usuarios creados.

Por el momento solo se pueden ver las cosas por consola. Basta con abrir la consola y utilizar el entorno de node para visualizar todo en la misma
=> .../ServerCoderhouse> node ./(archivoAVisualizar).js

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

Desafio 2:

Se corrigieron detalles erroneos o faltantes en el desafio 1, se cambió el formato del id, se agrego una ruta por defecto para las imagenes en el caso de que no se especifiquen.

En este desafio se crearon las carpetas contenedoras para los archivos de memory ProductsManager.memory.js (antes ProductsManager.js) y UsersManager.memory.js (antes UsersManager.js) y los archivos de fs ProductsManager.fs.js y UsersManager.fs.js, más una carpeta para contener los archivos .json creados por los archivos fs.

Se agregaron las funciones readOne() y destroy() las cuales reciben un id como parametro y devuelven el objeto buscado en el caso de readOne() o eliminan el objeto deseado en el caso de destroy(). A su vez, tanto estas funciones como create() y read() fueron completadas con manejo de error try/catch.

Se agregaron 2 usuarios y 5 productos a los ya existentes en el desafio anterior.

Para poder evaluar los distintos archivos se debe utilizar la consola con el entorno de node:

.../ServerCoderhouse> node ./data/fs/(nombreDelArchivo).fs.js para los archivos de file system.
.../ServerCoderhouse> node ./data/memory/(nombreDelArchivo).memory.js para los archivos de memoria.