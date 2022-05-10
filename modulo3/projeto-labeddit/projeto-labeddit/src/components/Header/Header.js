import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import { StyledHeader } from './styled';

const Header = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        goToLogin(navigate);
    }

    return (
        <StyledHeader>
            <button onClick={logout}>Logout</button>
        </StyledHeader>

    )
}

export default Header;