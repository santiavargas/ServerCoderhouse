import express, { response } from "express"
import UsersManager from "./src/data/fs/UsersManager.fs.js"
import productsManager from "./src/data/fs/ProductsManager.fs.js"
import usersManager from "./src/data/fs/UsersManager.fs.js"
import indexRouter from "./src/routers/index.router.js"
import errorHandler from "./src/middlewares/errorHandler.js"
import pathHandler from "./src/middlewares/pathHandler.js"

const server = express()
const port = 8080
const ready = () => console.log("server ready on port " + port)
server.listen(port,ready)

server.use(express.json())
server.use(express.urlencoded({extended: true}))


server.use("/", indexRouter)
server.use(errorHandler)
server.use(pathHandler)

// server.get("/api/users", async(req,res)=>{
//     try {
//         const {role} = req.query
//         const usersList = await UsersManager.read(role)
//         if (usersList.length===0){
//             return res.status(404).json({
//             resopnse : null,
//             success : false,
//             message : "Empty array"
//         })
//         } else {
//             return res.status(200).json({
//             response : usersList,
//             role,
//             success : true
//         })
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             resopnse : "ERROR",
//             success : false
//         })
        
//     }
// })

// server.get("/api/users/:uid", async(req,res)=>{
//     try {
//         const {uid} = req.params
//         const usersSearch = await UsersManager.readOne(uid)
//         if(usersSearch){
//             return res.status(200).json({
//             response : usersSearch,
//             success : true
//             })
//         } else {
//             return res.status(404).json({
//                 response : null,
//                 message : "User not found / incorrect id"
//         })
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             resopnse : "ERROR",
//             success : false
//         })
//     }
// })

// const create = async (req,res) => {
//     try{
//         const data = req.body
//         const newUser = await usersManager.create(data)
//         return res.status(201).json({
//             response : newUser.id,
//             message : "New user created",
//             success : true
//         })
//     } catch (error){
//         console.log(error)
//         return res.status(500).json({
//             response : "ERROR",
//             success : false
//         })
//     }
// }

// const update = async (req,res) => {
//     try {
//         const {uid} = req.params
//         const data = req.body
//         const uUpdate = await usersManager.update(uid,data)
//         return res.status(200).json({
//             response : uUpdate,
//             success : true
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             resopnse : "ERROR",
//             success : false
//         })
//     }
// }

// const destroy = async (req,res) => {
//     try {
//         const {uid} = req.params
//         const destroyUser = await usersManager.destroy(uid)
//         if(destroyUser){
//             return res.status(200).json({
//                 response : destroyUser,
//                 message : "User deleted",
//                 success : true
//             })
//         } else {
//             return res.status(400).json({
//                 response : "ERROR",
//                 message : "User not found or incorrect id",
//                 success : false
//             })
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             resopnse : "ERROR",
//             success : false
//         })
//     }
// }

// server.post("/api/users", create)
// server.put("/api/users/:uid", update)
// server.delete("/api/users/:uid", destroy)

server.get("/api/products",async(req,res)=>{
    try {
        const {category} = req.query
        const productsList = await productsManager.read(category)
        if (productsList.length===0){
            return res.status(404).json({
                response : null,
                success : false,
                message : "empty array"
            })
        } else {
            return res.status(200).json({
                response : productsList,
                category,
                success : true
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            resopnse : "ERROR",
            success : false
        })
    }
})

server.get("/api/products/:pid", async(req,res)=>{
    try {
        const {pid} = req.params
        const productsSearch = await productsManager.readOne(pid)
        if (productsSearch){
            return res.status(200).json({
                response: productsSearch,
                success : true
            })
        } else {
            return res.status(404).json({
                response : null,
                success : false,
                message : "Product not found / incorrect id"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            resopnse : "ERROR",
            success : false
        })
    }
})