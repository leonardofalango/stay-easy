import CryptoJS from "react-native-crypto-js";
import axios from 'axios'


class UserService
{
    static host = 'http://localhost:8080/user';

    static login = async (data) => {
        try {
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()

            const response = await axios.post(this.host + "/login", { data: aesData })
                .then((res) => {
                    return { status: res.status, data: { data: res.data.data, token: res.data.token } }
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
            
            
            const res = await axios.post(this.host + "/add", { data : aesData })
            
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
}

export { UserService }