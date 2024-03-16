# ServerCoderhouse

Desafio 1:
En este desafio se crearon las clases UsersManager y ProductsManager en sus respectivos archivos para la gestion de distintos datos.

La clase ProductsManager cuenta con las propiedades id, title, photo, category, price y stock.
La clase UsersManager cuenta con las propiedades id, photo, email, password y role.

El id se genera de forma automatica y es autoincrementable. El resto de las propiedades deben agregarse a traves del metodo create, en el que todos los campos son obligatorios.

Para poder ver los elementos creados se debe utilizar el read, que devuelve un array con los productos y usuarios creados.

Por el momento solo se pueden ver las cosas por consola. Basta con abrir la consola y utilizar el entorno de node para visualizar todo en la misma
=> .../ServerCoderhouse> node ./(archivoAVisualizar).js