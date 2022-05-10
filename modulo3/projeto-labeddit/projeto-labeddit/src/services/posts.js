import axios from 'axios';
import { baseURL } from '../constants/urls';

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

export const post = (setPosts) => {
    axios.get(`${baseURL}/posts`, headers)
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro por favor, tente novamente.")
        })
}

export const createPost = (body) => {
    axios.post(`${baseURL}/posts`, body, headers)
    .then((res) => {
        console.log(res.data.message)
    })
    .catch((err) => {
        console.log(err.response)
    })
}