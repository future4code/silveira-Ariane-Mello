//Formulário para o administrador criar uma nova viagem

import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../Hooks/useForm'
import { Planets } from '../Constants/Planets'
import useProtectedPage from '../Hooks/useProtectedPage'

const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    height: 100vh;
    flex-direction: column;  
    color: rgb(217, 176, 255);
`

const Header = styled.div`
display: flex;
margin-right: 25vh;
justify-content: flex-end;
`

const Titulo = styled.div`
color: rgb(217, 176, 255);
display: flex;
justify-content: space-around;
`

const Card = styled.div`
border: 5px double rgb(217, 176, 255);
width: 30vw;
height: auto;
display: flex;
color: rgb(217, 176, 255);
list-style-type: none;
flex-direction: column;
margin: 0 auto;
`

const Botaozinho = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
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
    useProtectedPage()

    const navigate = useNavigate()

    const goHomePage = () => {
        navigate("/")
    }

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })

    const create = (event) => {
        event.preventDefault()
        createTrip()
        cleanFields()
    }

    const createTrip = () => {
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "auth": localStorage.getItem("token")
            }
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ariane-silveira/trips", form, headers)
            .then((response) => {
                alert("Parabéns sua viagem foi cadastrada com sucesso")
            })
            .catch((err) => {
                cleanFields()
                alert("Ocorreu um erro, por favor gtente novamente")
            })
    }

    const getPlanet = Planets.map((planets) => {
        return <option key={planets} value={planets}> {planets} </option>
    })

    return (
        <GlobalStyles>
            <Header>
                <Button>
                    <button onClick={goHomePage}>
                        Home
                    </button>
                </Button>
            </Header>
            <Titulo>
                <h1>Sala de comando</h1>
            </Titulo>
            <Card>
                <form onSubmit={create}>
                    <input
                        name={"name"}
                        placeholder="Nome"
                        value={form.name}
                        onChange={onChange}
                    />
                    <select
                        name={"planet"}
                        value={form.planet}
                        onChange={onChange}
                        placeholder="Planet"
                    >
                        <option value="" disabled>Escolha um planeta</option>
                        {getPlanet}
                    </select>
                    <input
                        name={"date"}
                        type={"date"}
                        placeholder="Data"
                        value={form.date}
                        onChange={onChange}
                    />
                    <input
                        name={"description"}
                        placeholder="Descrição"
                        value={form.description}
                        onChange={onChange}
                    />
                    <input
                        name={"durationInDays"}
                        placeholder="Duração em dias"
                        value={form.durationInDays}
                        onChange={onChange}
                    />
                    <Button>
                        <Botaozinho>
                            <button>Criar</button>
                        </Botaozinho>
                    </Button>
                </form>
            </Card>
        </GlobalStyles>
    )
}
