const User = require("../model/User")
const Jwt = require("../services/jwtService")
const crypto = require("crypto-js")

class UserController
{
    static getAll = async (req, res) => {
        try {
            const data = await User.find()

            return res.status(200).send({
                message : "Guti!",
                data: data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
            })
        }
    }

    static add = async (req, res) => {
        try {
            const {
                name,
                email,
                password,
                birthday,
                status,
                cpf
            } = JSON.parse(crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            
            const user = {
                name,
                email,
                password : crypto.MD5(password),
                birthday,
                status,
                cpf,
                verified : false
            }
            
            const response = await User.create(user)

            return res.status(200).send({
                message : "User created!",
                data : user,
                response : response
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }

    static update = async (req, res) => {
        try {
            const {
                id,
                name,
                email,
                password,
                birthday,
                status,
                cpf
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            const user = await User.findById(id)

            if (user === null)
                return res.status(404).send({
                    message : "user not found"
                })
            
            const newUser = { name, email, password, birthday, status, cpf }

            const response = await User.findByIdAndUpdate(
                id,
                newUser
            )

            return res.status(200).send({
                message : "user updated!",
                data: {
                    oldUser : user,
                    newUser : newUser
                }
            })
        } catch (e) {
            return res.status(500).send({
                message : "Internal error",
                debug : e.message
            })
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!id)
                return res.status(401).send({
                    message : "Bad request",
                    data : id
                })
            
            const response = await User.findByIdAndRemove(id)

            return res.status(200).send({
                message : "guti",
                data : response
            })
        } catch (e) {
            return res.status(500).send({
                message : "Internal error",
                debug : e.message
            })
        }
    }

    static login = async (req, res) => { 
        try {
            const {
                name,
                password 
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            
            const user = await User.findOne({
                email : name,
                password : crypto.MD5(password)
            })

            const jwt = await Jwt.create(user)

            if (user)
                return res.status(200).send({
                    message : "Guti!",
                    data : user,
                    token : jwt
                })

        } catch (e) {
            console.log(e.message)

            res.status(500).send({
                message : "Error",
                debug : e.message
            })
        }
    }

    static getById = async (req, res) => {
        try {
            const {
                id
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));
    
            const data = await User.findById(id);

            if (data)
                return res.status(200).send({
                    message : "Guti!",
                    data: data
                })
            
            return res.status(404).send({
                message: "user not found!",
                data: id
            })

        } catch (e) {
            res.status(500).send({
                message : "Error",
                debug : e.message
            })
        }

    }

    static verifyToken = async (req, res) => {
        
    }
}

module.exports = UserController