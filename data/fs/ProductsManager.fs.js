import fs from "fs"
import crypto from "crypto"

class ProductsManager{
    constructor(){
        this.path = "./data/fs/files/products.json",
        this.init()
    }
    init(){
        const exists = fs.existsSync(this.path)
        if(!exists) {
            const stringData = JSON.stringify([], null, 2)
            fs.writeFileSync(this.path, stringData)
            console.log("Archivo creado")
        } else {
            console.log("El archivo ya existe")
        }
    }

    async create (data) {
        try{
            const product = {
            id: data.id || crypto.randomBytes(12).toString("hex"),
            title: data.title,
            photo: data.photo || "https://definicion.de/wp-content/uploads/2009/06/producto.png",
            category: data.category,
            price: data.price,
            stock: data.stock,
        }
        if(!data.title || !data.category || !data.price || !data.stock){
            console.log("Producto no creado. Todos los campos son obligatorios")
        } else {
            let products = await fs.promises.readFile(this.path, "utf-8")
            products = JSON.parse(products)
            products.push(product)
            console.log("Producto creado")
            products = JSON.stringify(products,null,2)
            await fs.promises.writeFile(this.path, products)
        }
        } catch (error){
            console.log(error)
        }
    }

    async read (categ) {
        try{
            let products = await fs.promises.readFile(this.path, "utf-8")
            products = JSON.parse(products)
            if(!categ){
                return products
            } else {
                products = products.filter(each=> each.category === categ)
                return products
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    async readOne (id) {
        try{
            let products = await fs.promises.readFile(this.path, "utf-8")
            products = JSON.parse(products)

            let productsEncontrado = products.find(each=> each.id === id)
            if(productsEncontrado){
                console.log(productsEncontrado)
                return productsEncontrado
            } else {
                console.log("producto no encontrado o id incorrecto")
            }
            
        } catch (error) {
            console.log (error)
        }
    }

    async destroy (id) {
        try{
            let products = await fs.promises.readFile(this.path,"utf-8")
            products = JSON.parse(products)
            const arrayFiltrado = products.filter(each=> each.id !== id)
            if(arrayFiltrado){
                console.log("Producto eliminado")
                await fs.promises.writeFile(arrayFiltrado)
            } else {
                console.log("Producto no encontrado o id incorrecto")
            }
            
        } catch (error){
            console.log(error)
        }
    }
}

// async function test(){
//     const products = new ProductsManager()
//     await products.create({
//         title: "Ivory",
//         photo: "Ivory.png",
//         category: "base",
//         price: 1500,
//         stock: 20,
//     })
//     await products.create({
//         title: "Super Red",
//         photo: "SuperRed.png",
//         category: "labial",
//         price: 2000,
//         stock: 30,
//     })
//     await products.create({
//         title: "Nude",
//         category: "sombra",
//         price: 4000,
//         stock: 50,
//     })
//     await products.create({
//         title: "Capuccino",
//         category: "labial",
//         price: 2000,
//         stock: 15,
//     })
//     await products.create({
//         title: "Night",
//         photo: "Night.png",
//         category: "sombra",
//         price: 3000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Medium Beige",
//         photo: "MediumBeige.png",
//         category: "Base",
//         price: 2000,
//         stock: 50,
//     })
//     await products.create({
//         title: "Soft Honey",
//         photo: "SoftHoney.png",
//         category: "base",
//         price: 2500,
//         stock: 35,
//     })
//     await products.create({
//         title: "Viva la Pink!",
//         category: "sombra",
//         price: 5000,
//         stock: 20,
//     })
//     await products.create({
//         title: "Enduring Wine",
//         photo: "EnduringWine.png",
//         category: "labial",
//         price: 1500,
//         stock: 60,
//     })
//     await products.create({
//         title: "Multi",
//         photo: "Multi.png",
//         category: "sombra",
//         price: 3000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Bruma tonificante",
//         photo: "brumaT.png",
//         category: "skincare",
//         price: 7000,
//         stock: 20,
//     })
//     await products.create({
//         title: "Protector solar 30fps",
//         photo: "pS30.png",
//         category: "protectorSolar",
//         price: 15000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Protector solar 40fps",
//         photo: "pS40.png",
//         category: "protectorSolar",
//         price: 20000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Protector solar 50fps",
//         photo: "pS50.png",
//         category: "protectorSolar",
//         price: 25000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Bruma Loción Fresh",
//         photo: "brumaLF.png",
//         category: "skincare",
//         price: 7500,
//         stock: 25,
//     })
//     await products.create({
//         title: "Bruma Antioxidante",
//         photo: "brumaA.png",
//         category: "skincare",
//         price: 8000,
//         stock: 30,
//     })
//     await products.create({
//         title: "Serum Efecto Tensor",
//         photo: "serumET.png",
//         category: "skincare",
//         price: 10000,
//         stock: 40,
//     })
//     await products.create({
//         title: "Serum Aclarante",
//         photo: "serumA.png",
//         category: "skincare",
//         price: 10500,
//         stock: 40,
//     })
//     await products.create({
//         title: "Serum Equilibrante",
//         photo: "serumE.png",
//         category: "skincare",
//         price: 10500,
//         stock: 40,
//     })
//     await products.create({
//         title: "Serum Regenerante",
//         photo: "serumR.png",
//         category: "skincare",
//         price: 11000,
//         stock: 40,
//     })
//     console.log(await products.read())
//     console.log(await products.readOne(2))
// }
// test()

const productsManager = new ProductsManager()
export default productsManager