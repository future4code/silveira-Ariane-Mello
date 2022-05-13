import React from 'react';
import { Form, Button } from './styled';
import useForm from '../../hooks/useForm';
import { login } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import useUnprotectedPage from '../../hooks/useProtectedPage';

const LoginForm = () => {

    useUnprotectedPage();

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
                <button><p>Login</p></button>
                <Button onClick={() => goToSignUp(navigate)}><p>Crie uma conta!</p></Button>
            </Form>
        </div>
    )
};

export default LoginForm;