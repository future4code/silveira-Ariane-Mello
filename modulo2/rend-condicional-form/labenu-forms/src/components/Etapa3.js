import React from "react";
import styled from "styled-components";

export default class Etapa3 extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <div>
                    <p>7. Por que você não terminou um curso de gradução?</p><input />
                    <p>8. Você fez algum curso complementar?</p>
                    <CaixaDrop>
                    <select id="curso" name="curso">
                            <option>Nenhum</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                    </select>
                </CaixaDrop>
                </div>
            </div>
        );
    }
}