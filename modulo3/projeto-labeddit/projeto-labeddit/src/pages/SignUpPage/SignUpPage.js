import { Checkbox } from '@mui/material'
import React from 'react'

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <input
            placeholder="Nome de usuário"
            />
            <input
            placeholder="E-mail"
            />
            <input
            placeholder="Senha"
            />
            <button>Cadastrar</button>
        </div>
    )
}

export default SignUpPage