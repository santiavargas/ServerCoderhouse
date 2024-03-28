import { Router } from "express";
import usersManager from "../../data/fs/UsersManager.fs.js";

const usersRouter = Router()

usersRouter.get("/", async(req,res,next)=>{
    try {
        const {role} = req.query
        const usersList = await usersManager.read(role)
        if (usersList.length===0){
            throw res.json({
                statusCode:404,
                resopnse : null,
                success : false,
                message : "Empty array"
            })
        } else {
            return res.json({
                statusCode : 200,
                response : usersList,
                role,
                success : true
        })
        }
    } catch (error) {
        console.log(error)
        return next(error)
        
    }
})

usersRouter.get("/:uid", async(req,res,next)=>{
    try {
        const {uid} = req.params
        const usersSearch = await usersManager.readOne(uid)
        if(usersSearch){
            return res.json({
                statusCode : 200,
                response : usersSearch,
                success : true
            })
        } else {
            throw res.json({
                statusCode : 404,
                response : null,
                message : "User not found / incorrect id"
        })
        }
    } catch (error) {
        console.log(error)
        return next(error)
    }
})

const create = async (req,res,next) => {
    try{
        const data = req.body
        const newUser = await usersManager.create(data)
        return res.json({
            statusCode : 201,
            response : newUser.id,
            message : "New user created",
            success : true
        })
    } catch (error){
        console.log(error)
        return next(error)
    }
}

const update = async (req,res,next) => {
    try {
        const {uid} = req.params
        const data = req.body
        const uUpdate = await usersManager.update(uid,data)
        if (uUpdate){
            return res.json({
                statusCode:200,
                response : uUpdate,
                success : true
        })
        } else {
            throw res.json({
                statusCode : 404,
                response : "ERROR",
                message : "User not found or incorrect id",
                success : false
            })
        }
        
    } catch (error) {
        console.log(error)
        return next(error)
    }
}

const destroy = async (req,res,next) => {
    try {
        const {uid} = req.params
        const destroyUser = await usersManager.destroy(uid)
        if(destroyUser){
            return res.json({
                statusCode : 200,
                    response : destroyUser,
                    message : "User deleted",
                    success : true
            })
        } else {
            throw res.json({
                statusCode : 404,
                response : "ERROR",
                message : "User not found or incorrect id",
                success : false
            })
        }
    } catch (error) {
        console.log(error)
        return next(error)
    }
}

usersRouter.post("/", create)
usersRouter.put("/:uid", update)
usersRouter.delete("/:uid", destroy)

export default usersRouter