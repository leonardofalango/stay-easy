const { Jwt } = require("./jwtService")
const Room = require("../model/Room")
const crypto = require("crypto-js")

class RoomController {
    static getAll = async (req, res) => {

        try {
            const rooms = await Room.find({})

            res.status(200).json(rooms)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static getOne = async (req, res) => {
        const { id } = req.params
        try {
            const room = await Room.findById(id)
            res.status(200).json(room)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    static create = async (req, res) => {
        const { name, hotelId, price, description, images, rating, reviews, amenities, checkin, checkout, payment, status } = req.body
        try {
            const newRoom = new Room({
                name, hotelId, price, description, images, rating, reviews, amenities, checkin, checkout, payment, status
            })

            const room = await newRoom.save()
            res.status(201).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static update = async (req, res) => {
        const { id } = req.params
        const { name, hotelId, price, description, images, rating, reviews, amenities, checkin, checkout, payment, status } = req.body
        try {
            const updatedRoom = await Room.findByIdAndUpdate(id, {
                name, hotelId, price, description, images, rating, reviews, amenities, checkin, checkout, payment, status
            }, { new: true })

            res.status(200).json(updatedRoom)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static updateStatus = async (req, res) => {
        const { id } = req.params
        const { status } = req.body
        try {
            const updatedRoom = await Room.findByIdAndUpdate(id, { status }, { new: true })
            res.status(200).json(updatedRoom)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    static delete = async (req, res) => {
        const { id } = req.params
        try {
            await Room.findByIdAndDelete(id)
            res.status(200).json("Room deleted successfully")

        } catch (error) {
            res.status(500).json(error)
        }
    }

    



}

module.exports = RoomController