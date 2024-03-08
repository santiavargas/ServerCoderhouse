class UsersManager {
    static #users = []
    create (data) {
        const user = {
            id: UsersManager.#users.length === 0 ? 1 : UsersManager.#users[UsersManager.#users.length - 1].id + 1,
            photo: data.photo,
            email: data.email,
            password: data.password,
            role: 0,
        }
        UsersManager.#users.push(user)
        console.log("Usuario creado")
    }

    read () {
        return UsersManager.#users
    }
}

const usuarios = new UsersManager()
usuarios.create({
    photo: "photo.png",
    email: "prueba@gmail.com",
    password: "asd123",
})
usuarios.create({
    photo: "photo2.jpg",
    email: "emailDel2@gmail.com",
    password: "passwordDel2",
})
console.log(usuarios.read())