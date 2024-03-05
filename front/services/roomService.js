import axios from 'axios'


class RoomService {
    static host = 'http://localhost:8080/room';

    static getAll = async () => {
        try {
            const response = await axios.get(this.host)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => { status: err.response.status })

            return response;
        }
        catch (e) {
            console.log(e);
        }
    }

    static getById = async (id) => {
        try {
            console.log(id);
            const response = await axios.get(this.host + `/?id=${id}`)
                .then((res) => {
                    return res.data[0];
                })
                .catch((err) => { return { status: err.response.status } });

            return response;
        } catch (e) {
            console.log(e);
        }
    }
}


export { RoomService }