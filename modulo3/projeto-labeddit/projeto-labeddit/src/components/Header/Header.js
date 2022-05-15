import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import { StyledHeader } from './styled';
import logo from '../../assets/img/logo.png';

const Header = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        goToLogin(navigate);
    };

    return (
        <StyledHeader>
            <img src={logo} alt="Logo LabEddit"/>
            <a onClick={logout}>Logout</a>
        </StyledHeader>

    )
};

export default Header;