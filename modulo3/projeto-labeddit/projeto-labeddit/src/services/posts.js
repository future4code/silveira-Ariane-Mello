import axios from 'axios';
import { baseURL } from '../constants/urls';

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

// export const post = (setPosts) => {
//     axios.get(`${baseURL}/posts`, headers)
//         .then((res) => {
//             setPosts(res.data)
//         })
//         .catch((err) => {
//             alert("Ocorreu um erro por favor, tente novamente.")
//         })
// }

export const createPost = (body, clear) => {
    axios.post(`${baseURL}/posts`, body, headers)
        .then((res) => {
            clear()
        })
        .catch((err) => {
            alert("Ocorreu um erro por favor, tente novamente.")
        })
}

export const createComment = (body, id, clear) => {
    axios.post(`${baseURL}/posts/${id}/comments`, body, headers)
        .then((res) => {
            console.log(res.data.message)
            clear()
        })
        .catch((err) => {
            console.log(err.response)
            alert("Ocorreu um erro por favor, tente novamente.")
        })
}