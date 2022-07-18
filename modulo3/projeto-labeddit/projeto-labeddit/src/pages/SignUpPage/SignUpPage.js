import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/users';
import { ScreenContainer, Form, LogoImage } from './styled';
import logo from '../../assets/img/logo.png';

const SignUpPage = () => {

    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({ username: '', email: '', password: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    };

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>Olá, boas vindas ao LabEddit ;)</h1>
            <div>
                <Form onSubmit={onSubmitForm}>
                    <input
                        value={form.username}
                        name={'username'}
                        onChange={onChange}
                        placeholder="Nome de usuário"
                        required
                    />
                    <input
                        value={form.email}
                        name={'email'}
                        type={"email"}
                        onChange={onChange}
                        placeholder="E-mail"
                        required
                    />
                    <input
                        value={form.password}
                        name={'password'}
                        type={"password"}
                        onChange={onChange}
                        placeholder="Senha"
                        required
                    />
                    <button><p>Cadastrar</p></button>
                </Form>
            </div>
        </ScreenContainer>
    )
}

export default SignUpPage;