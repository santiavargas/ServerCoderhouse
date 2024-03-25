import express, { response } from "express"
import UsersManager from "./data/fs/UsersManager.fs.js"

const server = express()
const port = 8080
const ready = () => console.log("server ready on port " + port)
server.listen(port,ready)

server.use(express.urlencoded({extended: true}))

server.get("/api/users", async(req,res)=>{
    try {
        const {role} = req.query
        const usersList = await UsersManager.read(role)
        if (usersList.length===0){
            return res.status(404).json({
            resopnse : null,
            success : false,
            message : "Empty array"
        })
        } else {
            return res.status(200).json({
            response : usersList,
            role,
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

server.get("/api/users/:uid", async(req,res)=>{
    try {
        const {uid} = req.params
        const usersSearch = await UsersManager.readOne(uid)
        if(usersSearch){
            return res.status(200).json({
            response : usersSearch,
            success : true
            })
        } else {
            return res.status(404).json({
                response : null,
                message : "User not found / incorrect id"
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