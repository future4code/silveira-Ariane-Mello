//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React, { useEffect, useState } from 'react'
import useProtectedPage from '../Hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

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
margin: 0 auto;
`

const Lista = styled.div`
border: 5px double rgb(217, 176, 255);
width: 30vw;
height: auto;
display: flex;
color: rgb(217, 176, 255);
list-style-type: none;
flex-direction: column;
margin: 0 auto;
text-align: center;
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

export default function TripDetailsPage() {
  useProtectedPage()

  const navigate = useNavigate()

  const params = useParams()

  const goHomePage = () => {
    navigate("/")
  }

  const [trip, setTrip] = useState([])
  const [candidate, setCandidate] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ariane-silveira/trip/${params.id}`,
      {
        headers: {
          auth: token
        }
      }
    )
      .then((response) => {
        setTrip(response.data.trip)
        setCandidate(response.data.trip.candidates)
      })
      .catch((err) => {
        alert("Ocorreu um erro, por favor tente novamente")
      })
  }, [])

  const candidato = (id, choice) => {
    const token = localStorage.getItem("token")

    const body = { approve: choice }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ariane-silveira/trips/${trip.id}/candidates/${id}/decide`, body,
      {
        headers: {
          auth: token
        }
      }
    )
      .then((response) => {
        if (choice === true) {
          alert("Candidato aprovado!")
        } else {
          alert("Candidato reprovado!")
        }
      }).catch((err) => {
        console.log(err.response.data.message)
        alert("Ocorreu um erro, por favor tente novamente")
      })
  }

  const approvedCandidates = trip.approved.map((candidate) => {
    return (
      <div key={candidate.id}> {candidate.name} </div>
    )
  })

  const listaCandidatos = candidate.map((list) => {
    return (
      <div>
        <p>Nome: {list.name}</p>
        <p>Idade: {list.age}</p>
        <p>País: {list.country}</p>
        <p>Texto de candidatura: {list.applicationText}</p>
        <p>Profissão:{list.profession}</p>
        <button onClick={() => candidato(list.id, true)}>Aprovar</button>
        <button onClick={() => candidato(list.id, false)}>Reprovar</button>
      </div>
    )
  })

  return (
    <GlobalStyles>
      <Header>
        <Button>
          <button onClick={goHomePage}> Home </button>
        </Button>
      </Header>
      <Titulo>
        <h1>Detalhes da Viagem</h1>
      </Titulo>
      <div>
        Nome: {trip.name}
        Data: {trip.date}
        Planeta: {trip.planet}
        Descrição: {trip.description}
        Duração em dias:{trip.durationInDays}
      </div>
      <Titulo>
        <h1>Candidatos</h1>
      </Titulo>
      <div>
        {listaCandidatos}
        </div>
        <Titulo>
        <h1>Candidatos Aprovados</h1>
      </Titulo>
      <div>
        {approvedCandidates}
      </div>
    </GlobalStyles>
  )
}
