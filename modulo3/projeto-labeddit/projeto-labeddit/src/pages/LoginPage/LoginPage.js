import React from 'react';
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { ScreenContainer, LogoImage } from './styled';
import logo from '../../assets/img/logo.png';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useProtectedPage';

const LoginPage = () => {

    useUnprotectedPage();

    const navigate = useNavigate();

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>LabEddit</h1>
            <div>
                <LoginForm />
            </div>
            <button onClick={() => goToSignUp(navigate)}>Crie uma conta</button>
        </ScreenContainer>
    )
}

export default LoginPage;