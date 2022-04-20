import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'

const ContainerImg = styled.div`
display: flex;
align-items: center;
img{
    display: flex;
    flex-direction: column;
    width: 25%;
    cursor: pointer;
    border-radius: 10%;
}
h3{
    margin: 25px;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
`

const Lista = styled.div`
border: 5px double pink;
width: 50vh;
text-align: center;
`

const BotaoHome = styled.div`
display: flex;
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

const Botao = styled.div`
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

export default function Matches(props) {

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ariane-silveira/matches'
        axios
            .get(url)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert('Ocorreu um erro, por favor tente novamente')
            })
    }

    const clear = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ariane-silveira/clear'
        axios
            .put(url)
            .then((res) => {
                getMatches()
            })
            .catch((err) => {
                alert('Erro! Por favor, tente novamente')
            })
    }

    const listMatches = matches.map((list) => {
        return (
            <Div>
                <ul>
                    <ContainerImg>
                        <img src={list.photo} /> <h3>{list.name}</h3>
                    </ContainerImg>
                </ul>
            </Div>
        )
    })

    useEffect(() => {
        getMatches()
    }, [])

    return (
        <Div>
            <Lista>
                <BotaoHome>
                <button onClick={props.irParaHome}>Home</button>
                </BotaoHome>
                <h1>Astromatch 💕</h1>
                <Botao>
                    <button onClick={() => clear()}>🗑️</button>
                </Botao>
                {listMatches}
            </Lista>
        </Div>
    )
}

