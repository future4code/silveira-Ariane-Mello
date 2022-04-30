import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'

const ContainerImg = styled.div`
img{
    width: 50%;
    border-radius: 10%;
}
`

const ContainerHome = styled.div`
border: 5px double pink;
width: 50vh;
text-align: center;
`

const Div = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100vh;
`

const Botao = styled.div`
button{
    margin: 20px;
    width: 50px;
    height: 30px;
    background-color: pink;
    color: white;
    border: none;
    transition-duration: 0.4s;
    border-radius: 180px;
    cursor: pointer;
}
button:hover{
    background-color: white;
    color: #250045;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}
`

const Fire = styled.div`
display: flex;
flex-direction: row-reverse;
button{
    margin: 20px;
    width: 50px;
    height: 30px;
    background-color: pink;
    color: white;
    border: none;
    transition-duration: 0.4s;
    border-radius: 180px;
    cursor: pointer;
}
button:hover{
    background-color: white;
    color: #250045;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}
`

export default function Home(props) {

    const [profile, setProfile] = useState({})

    const getProfile = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ariane-silveira/person'
        axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                alert('Erro! Perfil não encontrado')
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const choosePerson = (choice, perfil) => {
        getProfile()
        const body = {
            choice: choice,
            id: perfil
        }

        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ariane-silveira/choose-person'
        axios
            .post(url, body)
            .then((res) => {
            })
            .catch((err) => {
                alert('Ocorreu um erro, por favor tente novamente')
            })
    }

    return (
        <Div>
            <ContainerHome>
                <h1>Astromatch 💕</h1>
                <Fire>
                    <button onClick={props.irParaMatches}>🔥</button>
                </Fire>
                <ContainerImg>
                    <img src={profile.photo} />
                </ContainerImg>
                <div>
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                </div>
                <Botao>
                    <button onClick={() => choosePerson(true, profile.id)}>👍</button>
                    <button onClick={() => choosePerson(false, profile.id)}>👎</button>
                </Botao>
            </ContainerHome>
        </Div>
    )
}
