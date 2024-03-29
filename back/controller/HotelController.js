const Jwt = require("../services/jwtService")
const Hotel = require("../model/Hotel")
const crypto = require("crypto-js")


class HotelController {
    static getAll = async (req, res) => {
        try {
            const {
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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
                hotelDescription,
                destination,
                amenities,
                bed,
                images,
                people,
                price,
                stars
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));
            
            console.log('hotel add')

            if (false) // !Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const hotel = {
                name,
                hotelDescription,
                destination,
                amenities,
                bed,
                images,
                people,
                price,
                stars
            }

            console.log(hotel)
            const response = await Hotel.create(hotel)
            console.log(response)
            
            return res.status(200).send({
                message : "Hotel created!",
                data : hotel,
                response : response
            })
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({
                message : "Error",
                debug : e.message,
                data : req.body
            })
        }
    }

    static addNewRoom = async (req, res) => {
        try {
            const {
                rooms,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })

            data = await Hotel.findOne({_id: req.params.id})
            if (data === null)
                return res.status(404).send({
                    message : "Not found"
                })
            data.rooms.push(rooms)
            const response = await Hotel.updateOne({_id: req.params.id}, {rooms: data.rooms})
            return res.status(200).send({
                message : "Room added!",
                data : rooms,
                response : response
            })
        }
        catch (e) {
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
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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

    static searchByPrice = async (req, res) => {
        try {
            const {
                price,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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

    static searchByOwner = async (req, res) => {
        try {
            const {
                owner,
                token
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
                return res.status(401).send({
                    message : "Unauthorized"
                })
        
            const data = await Hotel.find({owner: owner})

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
            } = JSON.parse(await crypto.AES.decrypt(req.body.data, process.env.keyAes).toString(crypto.enc.Utf8));

            if (false) // !Jwt.verify(token))
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

module.exports = HotelController