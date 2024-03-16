class ProductsManager {
    static #products = []
    create (data) {
        const user = {
            id: ProductsManager.#products.length === 0 ? 1 : ProductsManager.#products[ProductsManager.#products.length - 1].id + 1,
            title: data.title,
            photo: data.photo,
            category: data.category,
            price: data.price,
            stock: data.stock,
        }
        if(!data.title || !data.photo || !data.category || !data.price || !data.stock){
            console.log("Todos los campos son obligatorios")
        } else {
            ProductsManager.#products.push(user)
            console.log("Producto creado")
        }
    }

    read () {
        return ProductsManager.#products
    }
}

const productos = new ProductsManager()
productos.create({
    title: "Ivory",
    photo: "Ivory.png",
    category: "base",
    price: 1500,
    stock: 20,
})
productos.create({
    title: "Super Red",
    photo: "SuperRed.png",
    category: "labial",
    price: 2000,
    stock: 30,
})
productos.create({
    title: "Nude",
    photo: "Nude.png",
    category: "sombra",
    price: 4000,
    stock: 50,
})
productos.create({
    title: "Capuccino",
    // photo: "Capuccino.png",
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
console.log(productos.read())