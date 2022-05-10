import React from 'react';
import { Form } from './styled';
import useForm from '../../hooks/useForm';
import { login } from '../../services/users';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({ email: '', password: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    };

    return (
        <div>
            <Form onSubmit={onSubmitForm}>
                <input
                    name={"email"}
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder="E-mail"
                    required
                />
                <input
                    name={"password"}
                    type={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    required
                />
                <button>Login</button>
            </Form>
        </div>
    )
}

export default LoginForm;