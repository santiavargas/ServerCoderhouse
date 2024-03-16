const fs = require ("fs")
const crypto = require ("crypto")

class UsersManager{
    constructor(){
        this.path = "./data/fs/files/users.json",
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
            const user = {
                // data.id solo para chequear funcionalidad de codigos
                id: data.id || crypto.randomBytes(12).toString("hex"),
                photo: data.photo || "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
                email: data.email,
                password: data.password,
                role: 0,
            } 
            if (!data.email || !data.password) {
                    console.log("Usuario no creado. Todos los campos son obligatorios")
                } else {
                    let users = await fs.promises.readFile(this.path, "utf-8")
                    users = JSON.parse(users)
                    users.push(user)
                    console.log("Usuario creado")
                    users = JSON.stringify(users,null,2)
                    await fs.promises.writeFile(this.path, users)
                }
            } catch (error){
                console.log(error)
            }
        }
    
        async read () {
            try{
                let users = await fs.promises.readFile(this.path, "utf-8")
                users = JSON.parse(users)
                return users
            } catch {
                console.log(error)
            }
            
        }
    
        async readOne (id) {
            try{
                let users = await fs.promises.readFile(this.path, "utf-8")
                users = JSON.parse(users)
                let usersEncontrado = users.find(each=> each.id === id)

                if(usersEncontrado){
                    console.log(usersEncontrado)
                } else {
                    console.log("usuario no encontrado o id incorrecto")
                }
                
            } catch (error) {
                console.log (error)
            }
        }
        async destroy (id) {
            try{
                let users = await fs.promises.readFile(this.path, "utf-8")
                users = JSON.parse(users)
                const arrayFiltrado = users.filter(each=> each.id !== id)
                if(arrayFiltrado){
                    console.log("Usuario eliminado")
                    await fs.promises.writeFile(arrayFiltrado)
                } else {
                    console.log("Usuario no encontrado o id incorrecto")
                }
            } catch (error){
                console.log(error)
            }
        }
}


async function test(){
    const users = new UsersManager()
    await users.create({
        email: "prueba@gmail.com",
        password: "asd123",
    })
    await users.create({
        id: 3,
        photo: "photo2.jpg",
        email: "emailDel2@gmail.com",
        password: "passwordDel2",
    })
    await users.create({
        photo: "photoUsuario.jpg",
        email: "emailNuevo@gmail.com",
        password: "passwordDel3",
    })
    await users.create({
        email: "emailPrueba@gmail.com",
        password: "passwordDel4",
    })
    console.log(await users.read())
    console.log (await users.readOne(3))
    
}
test()