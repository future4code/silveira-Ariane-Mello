import axios from 'axios';
import { baseURL } from '../constants/urls';
import { goToFeed } from '../routes/coordinator';

export const login = (body, clear, navigate) => {
    axios.post(`${baseURL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Ops, ocorreu um erro: ", err.response)
        })
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${baseURL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            alert("Seu cadastro foi realizado com sucesso!")
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Ops, ocorreu um erro: ", err.response)
        })
}
