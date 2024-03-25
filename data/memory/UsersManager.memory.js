import crypto from "crypto"

class UsersManager {
    static #users = []
    create (data) {
        try{
            if (!data.email || !data.password){
                console.log("Usuario no creado. Todos los campos son obligatorios")
                return
            }
            const user = {
                // data.id solo para chequear funcionalidad de codigos
                id: data.id || crypto.randomBytes(12).toString("hex"),
                photo: data.photo || "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
                email: data.email,
                password: data.password,
                role: 0,
            }
                UsersManager.#users.push(user)
                console.log("Usuario creado")
            } catch (error){
            console.log(error)
        }
    }

    read () {
        try{
            return UsersManager.#users
        } catch {
            console.log(error)
        }
        
    }

    readOne (id) {
        try{
            const idFound = UsersManager.#users.find(each=> each.id === id)
            if(idFound){
                console.log(idFound)
            } else {
                console.log("usuario no encontrado o id incorrecto")
            }
            
        } catch (error) {
            console.log (error)
        }
    }

    destroy (id) {
        try{
            const arrayFiltered = UsersManager.#users.filter(each=> each.id !== id)
            if(arrayFiltered){
                console.log("Usuario eliminado")
                UsersManager.#users = arrayFiltered
                console.log(usuarios.read())
            } else {
                console.log("Usuario no encontrado o id incorrecto")
            }
            
        } catch (error){
            console.log(error)
        }
    }
}

const usuarios = new UsersManager()
usuarios.create({
    email: "prueba@gmail.com",
    password: "asd123",
})
usuarios.create({
    id: 3,
    photo: "photo2.jpg",
    email: "emailDel2@gmail.com",
    password: "passwordDel2",
})
usuarios.create({
    photo: "photoUsuario.jpg",
    email: "emailNuevo@gmail.com",
    password: "passwordDel3",
})
usuarios.create({
    email: "emailPrueba@gmail.com",
    password: "passwordDel4",
})

console.log("prueba de read()")
console.log(usuarios.read())
console.log("prueba de readOne()")
console.log(usuarios.readOne(3))
// No entiendo por que en la consola aparece undefined luego del console.log(usuarios.readOne(3))
console.log("prueba de destroy") 
console.log(usuarios.destroy(3))