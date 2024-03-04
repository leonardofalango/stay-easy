import CryptoJS from "react-native-crypto-js";
import axios from 'axios'

// const host = `${process.env.hoster}${process.env.port}/user`

class UserService
{
    static host = 'http://localhost:8080/';

    static loginFacebook = async () => {
        try {
            const host = 'http://localhost:8080';
    
            // Simplificação da configuração de Axios
            const res = await axios.get(`${host}/auth/facebook`, {
                withCredentials: true // Se necessário para manter sessões baseadas em cookies
            }).then(response => {
                console.log(response);
                return response; // Retornando a resposta para uso fora do .then
            }).catch(error => {
                console.error(error);
                throw error; // Lançando erro para ser capturado pelo catch externo
            });
    
            return {
                status: res.status,
                data: res.data
            };
        } catch (e) {
            return {
                status: e.response ? e.response.status : 500, // Checando se e.response existe
                data: e.message
            };
        }
    };
    static login = async (data) => {
        try {
            const aesData = CryptoJS.AES.encrypt(JSON.stringify(data), "bolosanha").toString()

            const response = await axios.post(this.host + "user/login", { data: aesData })
                .then((res) => {
                    sessionStorage.setItem("token", res.data.token)
                    return { status: res.status, data: res.data.data }
                })
                .catch((err) => { return { status: err.response.status } });
            

            return {
                status: res.status,
                data: res.data
            }            

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