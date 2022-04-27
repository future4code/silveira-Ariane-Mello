//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
//Para vermos todas as viagens

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
margin-bottom: -10px;
`

const Lista = styled.div`
border: 5px double rgb(217, 176, 255);
width: 30vw;
height: auto;
display: flex;
justify-content: center;
color: rgb(217, 176, 255);
list-style-type: none;
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
const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      navigate.push("/login")
    }
  }, [])
}

export default function AdminHomePage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  const goCreateTripPage = () => {
    navigate("/admin/trips/create")
  }

  const goTripDetailsPage = (id) => {
    navigate(`/tripdetailspage/${id}`)
  }

  const [trips, setTrips] = useState([])

  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ariane-silveira/trips")
      .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((err) => {
        alert("Ocorreu um erro, por favor tente novamente")
      })
  }, [])

  const deleteViagem = (id) => {
    const token = localStorage.getItem("token")
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${id}`,
      {
        headers: {
          auth: token
        }
      }
    )
      .then((response) => {
        alert("Viagem excluída com sucesso!")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const tripsList = trips.map((list) => {
    return (
      <div>
        <button onClick={() => goTripDetailsPage(list.id)}>{list.name}</button>
        <button onClick={() => deleteViagem(list.id)}>🗑</button>
      </div>
    )
  })

  return (
    <GlobalStyles>
    <div>
      <Header>
        <Button>
          <button onClick={goHomePage}>
            Home
          </button>
          <button>
            Logout
          </button>
        </Button>
      </Header>
      <Titulo>
        <h1>Sala de comando</h1>
      </Titulo>
      <Button>
        <Botaozinho>
          <button onClick={goCreateTripPage}>Criar viagem</button>
        </Botaozinho>
      </Button>
      <Lista>
        <li>
          {tripsList}
        </li>
      </Lista>
    </div>
    </GlobalStyles>
  )
}