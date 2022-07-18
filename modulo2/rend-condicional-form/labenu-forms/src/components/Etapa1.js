import React from "react";
import styled from "styled-components";

const CaixaDrop = styled.div`
display: flex;
align-itens: center;
justify-content: center;
`

export default class Etapa1 extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <div>
                    <p>1. Qual o seu nome?</p><input />
                    <p>2. Qual sua idade?</p><input />
                    <p>3. Qual seu e-mail?</p><input />
                    <p>4. Qual a sua escolaridade?</p>
                    <CaixaDrop>
                    <select id="ensino" name="ensino">
                            <option>Ensino médio incompleto</option>
                            <option>Ensino médio completo</option>
                            <option>Ensino superior incompleto</option>
                            <option>Ensino superior completo</option>
                    </select>
                </CaixaDrop>
                </div>
            </div>

        );
    }
}