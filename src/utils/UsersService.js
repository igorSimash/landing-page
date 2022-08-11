import axios from "axios";

export default class UsersService {
    static async getUsers(page = 1) {
        const response = await axios.get(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
        )
        return response.data
    }
    static async getPositions(){
        const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
        return response.data
    }
    static async getToken() {
        return await (await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')).data.token
    }
}