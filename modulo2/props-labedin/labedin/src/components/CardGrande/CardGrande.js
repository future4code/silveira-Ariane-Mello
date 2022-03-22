import React from 'react';
import styled from 'styled-components'

const ComponenteEstilizado = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Image = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Descricao = styled.div`
    margin-bottom: 15px;
`

const Nome = styled.h4`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ComponenteEstilizado>
            <Image src={ props.imagem } />
            <Descricao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Descricao>
        </ComponenteEstilizado>
    )
}

export default CardGrande;