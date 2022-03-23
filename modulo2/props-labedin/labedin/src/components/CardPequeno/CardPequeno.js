import React from 'react';
import styled from 'styled-components';

const StyleCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 600px;
    `

const ImagemPequena = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
    `


const DescricaoPequena = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardPequeno(props) {
    return (
        <StyleCardPequeno>
            <ImagemPequena src={ props.imagem } />
            <DescricaoPequena>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </DescricaoPequena>
        </StyleCardPequeno>
    )
}

export default CardPequeno;

