
import CryptoJS from "react-native-crypto-js";
import axios from 'axios'

// const host = `${process.env.hoster}${process.env.port}/user`

class UserService
{
    static host = 'http://localhost:8080/';

    static login = async (data) => {
        try {
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()

            const response = await axios.post(this.host + "user/login", { data: aesData })
                .then((res) => {
                    sessionStorage.setItem("token", res.data.token)
                    return { status: res.status, data: res.data.data }
                })
                .catch((err) => { return { status: err.response.status } });
            
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    static create = async (data) => {
        try {
            //? encrypting the data with aes
    
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()
            
            
            const res = await axios.post(this.host + "user/add", { data : aesData })
            
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

    // static verifyToken = async (token) => {
    //     try {
    //         const res = await axios.post

    //     } catch (e) {
    //         console.log(e.message)-----------------------------------------------------------------------------------------------------------------------------------
    //     }
    // }

    static sendEmail = async (data) => {
        try {
            const email = data.email;

            const res = await axios.get(`${this.host}mail/send-email/${email}`);
            
            return {
                status: res.status,
                data: res.data
            }
        } catch (e) {
            console.log(e.message);
        }
    }
}

export { UserService }