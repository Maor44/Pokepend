import axios, {Axios} from "axios";

const api:Axios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default api;