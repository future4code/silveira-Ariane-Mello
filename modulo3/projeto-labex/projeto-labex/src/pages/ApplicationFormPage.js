//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../Hooks/useForm'
import { Countries } from '../Constants/Countries'

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

const CardForm = styled.div`
border: 5px double rgb(217, 176, 255);
width: 30vw;
height: auto;
display: flex;
color: rgb(217, 176, 255);
list-style-type: none;
flex-direction: column;
margin: 10px auto;
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

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    idViagem: "",
  })

  const cadastrar = (event) => {
    event.preventDefault()
    applyToTrip(form.idViagem)
    cleanFields()
  }

  const [trips, setTrips] = useState([])

  const applyToTrip = (id) => {
    const body = {
      "name": form.name,
      "age": form.age,
      "applicationText": form.applicationText,
      "profession": form.profession,
      "country": form.country,
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ariane-silveira/trips/${id}/apply`, body)
      .then((response) => {
        console.log(response.data)
        alert("Parabéns seu cadastro foi realizado com sucesso, boa sorte!")
      })
      .catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente novamente")
      })
  }

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

  const getTrips = trips.map((list) => {
    return (
      <option key={list.id} value={list.id}>{list.name}</option>
    )
  })

  const getCountries = Countries.map((list) => {
    return (
      <option key={list} value={list}>{list}</option>
    )
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
        <h1>Embarque nessa viagem</h1>
      </Titulo>
      <CardForm>
        <form onSubmit={cadastrar}>
          <select
            value={form.idViagem}
            name={"idViagem"}
            onChange={onChange}>
            <option value="" disabled>Escolha sua viagem</option>
            {getTrips}
          </select>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
          />
          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Idade"
          />
          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder="Texto para candidatura"
          />
          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
          />
          <select
            value={form.country}
            name={"country"}
            onChange={onChange}
          >
            <option value="" disabled>Escolha seu país</option>
            {getCountries}
          </select>
          <Button>
            <Botaozinho>
              <button>Enviar</button>
            </Botaozinho>
          </Button>
        </form>
      </CardForm>
    </GlobalStyles>
  )
}
