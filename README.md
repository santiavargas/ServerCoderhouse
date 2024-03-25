# ServerCoderhouse

-Esta aplicación funciona como un gestor de Usuarios y Productos. Cuenta con archivos memory.js que utiliza la terminal para funcionar y en el cual las craciones se pierden al cerrar la misma, y con archivos fs.js que funcionan igual que los memory pero creando archivos .json en donde se guardan los usuarios y productos creados. A esto se le suma un archivo server.js que levanta un servidor local para poder ver todo lo anteriormente dicho desde el navegador.

-Esta aplicación fue creada con las siguienres herramientas y sus versiones:
    -Node.js: 18.17.1
    -npm: 9.6.7
    -express: 4.19.1
    -nodemon: 3.1.0 -- instalado como devDependencies

-Para correr nuestra aplicación deben ingresar en la consola el comando "npm run dev" lo que producira que el archivo server.js comience a funcionar, levante el servidor local y desde esa instancia podran ver las cosas creadas desde el navegador entrando a: localhost:8080/
    -Para ver la lista de usuarios en el navegador: localhost:8080/api/users
    -Para ver la lista de usuarios con los roles de cada uno en el navegador: localhost:8080/api/users?role=x
        donde x es el número de role que desea buscar.
    -Para buscar un usuario por su id desde el navegador: localhost:8080/api/users/x
        donde x es el id del usuario a buscar

    -Para ver la lista de productos en el navegador: localhost:8080/api/products
    -Para ver la lista de productos con las categorias de cada uno en el navegador: localhost:8080/api/products?category=x
        donde x es la categoria que desea buscar.
    -Para buscar un producto por su id desde el navegador: localhost:8080/api/products/x
        donde x es el id del producto a buscar