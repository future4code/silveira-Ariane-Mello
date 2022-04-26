//Formulário para o administrador criar uma nova viagem

import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = styled.div`
display: flex;
height: 100vh;
margin-right: 25vh;
justify-content: flex-end;
`

const Button = styled.div`
display: flex;
flex-direction: column;
margin-top: 5vh;

button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
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

export default function CreateTripPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
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
      <div>
        <div>
          <h1>Cadastre suas viagens</h1>
        </div>
        <div>
          <input
            placeholder="Nome"
          />
          <option
          />
          <date
          />
          <input
            placeholder="Descrição"
          />
          <input
            placeholder="Duração em dias"
          />
        </div>
      </div>
    </div>
  )
}
