const { Jwt } = require("../services/jwtService")
const Hotel = require("../model/Hotel")
const crypto = require("crypto-js")


class HotelController {
    static getAll = async (req, res) => {
        try {
            const {
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })

            const data = await Hotel.find()

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
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));
            

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const hotel = {
                name,
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status
            }

            const response = await Hotel.create(hotel)

            return res.status(200).send({
                message : "Hotel created!",
                data : hotel,
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
                name,
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const hotel = {
                name,
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status
            }

            data = await Hotel.findOne({_id: req.params.id})

            if (data === null)
                return res.status(404).send({
                    message : "Not found"
                })
            
            if (data.owner != owner)
                return res.status(401).send({
                    message : "Unauthorized"
                })
            

            const response = await Hotel.updateOne({_id: req.params.id}, hotel)

            return res.status(200).send({
                message : "Hotel updated!",
                data : {old: data, new: hotel},
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

    static delete = async (req, res) => {
        try {
            const {
                owner,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            data = await Hotel.findOne({_id: req.params.id})

            if (data === null)
                return res.status(404).send({
                    message : "Not found"
                })
            
            if (data.owner != owner)
                return res.status(401).send({
                    message : "Unauthorized"
                })
            

            const response = await Hotel.deleteOne({_id: req.params.id})

            return res.status(200).send({
                message : "Hotel deleted!",
                data : data,
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

    static getOne = async (req, res) => {
        try {
            const {
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            data = await Hotel.findOne({_id: req.params.id})

            if (data === null)
                return res.status(404).send({
                    message : "Not found"
                })
            

            return res.status(200).send({
                message : "Hotel found!",
                data : data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }

    static search = async (req, res) => {
        try {
            const {
                name,
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const hotel = {
                name,
                address,
                rooms,
                price,
                description,
                images,
                rating,
                reviews,
                amenities,
                services,
                rules,
                checkin,
                checkout,
                cancellation,
                payment,
                contact,
                owner,
                status
            }

            const data = await Hotel.find(hotel)

            return res.status(200).send({
                message : "Hotel found!",
                data : data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }


    static searchByPrice = async (req, res) => {
        try {
            const {
                price,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const data = await Hotel.find({price: {$lte: price}})

            return res.status(200).send({
                message : "Hotel found!",
                data : data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }


    static searchByStatus = async (req, res) => {
        try {
            const {
                status,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const data = await Hotel.find({status: status})

            return res.status(200).send({
                message : "Hotel found!",
                data : data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    
    }

    static searchByRating = async (req, res) => {
        try {
            const {
                rating,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, env.keyAes).toString(crypto.enc.Utf8));

            if (!Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const data = await Hotel.find({rating: {$gte: rating}})

            return res.status(200).send({
                message : "Hotel found!",
                data : data
            })
        } catch (e) {
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }


}