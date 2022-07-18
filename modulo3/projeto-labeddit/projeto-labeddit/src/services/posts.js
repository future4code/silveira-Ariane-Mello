import axios from 'axios';
import { baseURL } from '../constants/urls';

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

export const createPost = (body, clear) => {
    axios.post(`${baseURL}/posts`, body, headers)
        .then((res) => {
            alert("Seu post foi criado com sucesso!")
            clear()
        })
        .catch((err) => {
            alert("Ops, ocorreu um erro: ", err.response)
        })
}

export const createComment = (body, id, clear) => {
    axios.post(`${baseURL}/posts/${id}/comments`, body, headers)
        .then((res) => {
            alert("Seu comentário foi adicionado com sucesso!")
            clear()
        })
        .catch((err) => {
            alert("Ops, ocorreu um erro: ", err.response)
        })
}

