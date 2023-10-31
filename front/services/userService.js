
import CryptoJS from "react-native-crypto-js";
import axios from 'axios'

// const host = `${process.env.hoster}${process.env.port}/user`

class UserService
{
    static login = async (data) => {
        try {
            //? encrypting the data with aes
            const host = 'http://localhost:8080/user'
    
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()
            
            
            const res = await axios.post(host + "/login", aesData)
            
            return {
                status: res.status,
                data: res
            }

        } catch (e) {
            return {
                status: e.response.status,
                data: e.message
            }
        }
    }

    static create = async (data) => {
        try {
            //? encrypting the data with aes
            const host = 'http://localhost:8080/user'
    
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()
            
            
            const res = await axios.post(host + "/add", aesData)
            
            return {
                status: res.status,
                data: res
            }

        } catch (e) {
            return {
                status: e.response.status,
                data: e.message
            }
        }
        
    }
}

export { UserService }