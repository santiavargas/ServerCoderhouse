const crypto = require ("crypto")
class ProductsManager {
    static #products = []
    create (data) {
        try{
            if(!data.title || !data.category || !data.price || !data.stock){
            console.log("Todos los campos son obligatorios")
            return
            }
            const product = {
            id: data.id || crypto.randomBytes(12).toString("hex"),
            title: data.title,
            photo: data.photo || "https://definicion.de/wp-content/uploads/2009/06/producto.png",
            category: data.category,
            price: data.price,
            stock: data.stock,
            }
            ProductsManager.#products.push(product)
            console.log("Producto creado")
        } catch (error){
            console.log(error)
        }
    }

    read () {
        try{
            return ProductsManager.#products
        } catch (error) {
            console.log(error)
        }
        
    }

    readOne (id) {
        try{
            const idEncontrado = ProductsManager.#products.find(each=> each.id === id)
            if(idEncontrado){
                console.log(idEncontrado)
            } else {
                console.log("producto no encontrado o id incorrecto")
            }
            
        } catch (error) {
            console.log (error)
        }
    }

    destroy (id) {
        try{
            const arrayFiltrado = ProductsManager.#products.filter(each=> each.id !== id)
            if(arrayFiltrado){
                console.log(productos.readOne(id))
                console.log("Producto eliminado")
                ProductsManager.#products = arrayFiltrado
                console.log(productos.read())
            } else {
                console.log("Producto no encontrado o id incorrecto")
            }
            
        } catch (error){
            console.log(error)
        }
    }
}

const productos = new ProductsManager()
productos.create({
    // title: "Ivory", COMENTADO A MODO DE PRUEBA
    photo: "Ivory.png",
    category: "base",
    price: 1500,
    stock: 20,
})
productos.create({
    id:2,
    title: "Super Red",
    photo: "SuperRed.png",
    category: "labial",
    price: 2000,
    stock: 30,
})
productos.create({
    title: "Nude",
    category: "sombra",
    price: 4000, 
    stock: 50,
})
productos.create({
    title: "Capuccino",
    category: "labial",
    price: 2000,
    stock: 15,
})
productos.create({
    title: "Night",
    photo: "Night.png",
    category: "sombra",
    price: 3000,
    stock: 40,
})
productos.create({
    title: "Medium Beige",
    photo: "MediumBeige.png",
    category: "Base",
    price: 2000,
    stock: 50,
})
productos.create({
    title: "Soft Honey",
    photo: "SoftHoney.png",
    category: "base",
    price: 2500,
    stock: 35,
})
productos.create({
    title: "Viva la Pink!",
    category: "sombra",
    price: 5000,
    stock: 20,
})
productos.create({
    title: "Enduring Wine",
    photo: "EnduringWine.png",
    category: "labial",
    price: 1500,
    stock: 60,
})
productos.create({
    title: "Multi",
    photo: "Multi.png",
    category: "sombra",
    price: 3000,
    stock: 40,
})
console.log(productos.read())
console.log("prueba de readOne")
console.log(productos.readOne(2))
console.log("prueba de destroy")
console.log(productos.destroy(2))