import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

export const signUp = async (body) => {
    return await instance.post('/users/signup', body)

}

export const login = async (body) => {
    return await instance.post('/users/login', body)
}