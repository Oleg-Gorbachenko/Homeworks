import axios from "axios";

export const RequestsAPI = {
    myRequest(value: string) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: value})
    },
}