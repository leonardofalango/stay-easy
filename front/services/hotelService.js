import CryptoJS from "react-native-crypto-js";
import axios from 'axios'

// const host = `${process.env.hoster}${process.env.port}/user`

class HotelService
{
    static create = async (data) => {
        console.log(data)
        const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()
        
        try {
            const host = 'http://localhost:8080';
    
            const res = await axios.post(`${host}/hotel/add`, { data: aesData })
                .then((res) => {
                    return { status: res.status, data: res.data.data }
                })
                .catch((err) => { return { status: err.response.status } })
                .finally((e) => {console.log("response")})

        } catch (e) {
            console.log(e);
        }
    }
}

export { HotelService }