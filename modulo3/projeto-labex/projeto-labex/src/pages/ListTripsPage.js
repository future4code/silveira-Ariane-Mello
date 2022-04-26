//Para vermos todas as viagens

import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = styled.div`
display: flex;
margin-right: 25vh;
justify-content: flex-end;
`

const Titulo = styled.div`
color: rgb(217, 176, 255);
display: flex;
justify-content: space-around;
margin-bottom: -10px;
`

const DivLista = styled.div`
display: flex;
justify-content: center;
margin-top: 25px;
`

const Lista = styled.div`
border: 5px double rgb(217, 176, 255);
width: 30vw;
display: flex;
justify-content: center;
color: rgb(217, 176, 255);
`

const Botaozinho = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
button{
margin-right: 25px;
margin-left: 25px;
}
`

const Button = styled.div`
display: flex;
flex-direction: column;
margin-top: 5vh;

button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 5vh;
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

export default function ListTripsPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  const goReturn = () => {
    navigate(-1)
  }

  const goApplicationFormPage = () => {
    navigate("/trips/application")
  }

  return (
    <div>
      <Header>
        <Button>
          <button onClick={goHomePage}>
            Home
          </button>
        </Button>
      </Header>
        <Titulo>
          <h1>Confira as viagens disponíveis aqui</h1>
        </Titulo>
        <Button>
          <Botaozinho>
          <button>Criar viagem</button>
          <button>Logout</button>
          </Botaozinho>
        </Button>
        <DivLista>
        <Lista>
          <li>
          <h1>TESTE</h1>
          <h1>TESTE</h1>
          <h1>TESTE</h1>
          <h1>TESTE</h1>
          <h1>TESTE</h1>
          </li>
        </Lista>
        </DivLista>
    </div>
  )
}
