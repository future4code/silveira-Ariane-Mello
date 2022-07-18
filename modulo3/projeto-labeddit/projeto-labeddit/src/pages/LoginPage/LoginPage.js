import React from 'react';
import { ScreenContainer, LogoImage } from './styled';
import logo from '../../assets/img/logo.png';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useProtectedPage';

const LoginPage = () => {

    useUnprotectedPage();

    return (
        <ScreenContainer>
            <LogoImage src={logo} alt="Logo LabEddit" />
            <h1>LabEddit</h1>
            <div>
                <LoginForm />
            </div>
        </ScreenContainer>
    )
}

export default LoginPage;