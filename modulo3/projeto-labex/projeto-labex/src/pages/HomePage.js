//Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from 'react'
import img from './img/home.gif'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    color: rgb(217, 176, 255);
`
const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin-right: 25vh;
    justify-content: space-around;
    align-items: center;
`

const DivEsquerda = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    min-width: 960px;
    img{
        width: 500px;
    }
`
const DivDireita = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
`

const ImgHome = styled.div`
img{
    width: 75vh;
    border-radius: 25px;
    opacity: 0.8;
}
`

const Botao = styled.div`
display: flex;
flex-direction: column;
height: 15vh;
button {
 --glow-color: rgb(217, 176, 255);
 --glow-spread-color: rgba(191, 123, 255, 0.781);
 --enhanced-glow-color: rgb(231, 206, 255);
 --btn-color: rgb(100, 61, 136);
 border: .25em solid var(--glow-color);
 padding: 1em 3em;
 color: var(--glow-color);
 font-size: 15px;
 font-weight: bold;
 background-color: var(--btn-color);
 border-radius: 1em;
 outline: none;
 box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 1em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
 text-shadow: 0 0 .5em var(--glow-color);
 position: relative;
 transition: all 0.3s;
}

button::after {
 pointer-events: none;
 content: "";
 position: absolute;
 top: 120%;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: var(--glow-spread-color);
 filter: blur(2em);
 opacity: .7;
 transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}

button:hover {
 color: var(--btn-color);
 background-color: var(--glow-color);
 box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 2em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
}

button:active {
 box-shadow: 0 0 0.6em .25em var(--glow-color),
        0 0 2.5em 2em var(--glow-spread-color),
        inset 0 0 .5em .25em var(--glow-color);
}
`

export default function HomePage() {

    const navigate = useNavigate()

    const goTripPage = () => {
        navigate("/trips/list")
    }

    const goLoginPage = () => {
        navigate("/login")
    }

    return (
        <GlobalStyles>
            <ContainerHome>
                <DivEsquerda>
                    <ImgHome>
                        <img src={img} alt='Imagem astronauta vendo universo'></img>
                        <h1>Um viajante interestelar.</h1>
                    </ImgHome>
                </DivEsquerda>
                <DivDireita>
                    <Botao>
                        <button
                            onClick={goTripPage}>
                            Viagens 🚀
                        </button>
                    </Botao>
                    <Botao>
                        <button
                        onClick={goLoginPage}>
                            Login 👩‍🚀
                        </button>
                    </Botao>
                </DivDireita>
            </ContainerHome>
        </GlobalStyles>
    )
}
