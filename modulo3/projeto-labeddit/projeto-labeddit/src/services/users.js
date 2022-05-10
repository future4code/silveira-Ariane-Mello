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
            alert("Erro de login por favor, tente novamente.")
        })
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${baseURL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Erro de cadastro por favor, tente novamente.")
        })
}
