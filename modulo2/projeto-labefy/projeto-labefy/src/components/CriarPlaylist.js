import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDiv = styled.div`
background-color: #ACB4C4;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const ContainerCriar = styled.div`
color: #181B25; 
border: 5px double #606C8E;
border-radius: 100px;
margin: 15px;
padding: 15px;
text-align: center;
width: 40vw;
height: 90vh;
align-items: center;
display: flex;
justify-content: center;
font-size: 20px;
line-height: 50px;
font-family: 'Roboto';
flex-direction: column;
    button{
        cursor: pointer;
        margin: 5px;
        padding: 3px;
            &:hover{
                color: #ACB4C4;            
                background: #36456F;
    }
`

export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: "",
    }

    handleNomePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "ariane-mello-silveira"
            }
        })
            .then((res) => {
                alert("Playlist criada com sucesso!")
                this.setState({ nomePlaylist: "" })
            })
            .catch((err) => {
                alert("Erro! Preencha o campo nome da sua playlist")
            })
    }

    render() {
        return (
            <div>
                <ContainerDiv>
                    <ContainerCriar>
                        <h1>Labefy ▶️</h1>
                        <h2>Crie suas playlists aqui 🎧</h2>
                        <input
                            placeholder={"Nome da sua playlist"}
                            value={this.state.nomePlaylist}
                            onChange={this.handleNomePlaylist}
                        />
                        <button onClick={this.criarPlaylist}>Criar playlist</button>
                        <button onClick={this.props.irParaListaPlaylist}>Suas playlists</button>
                    </ContainerCriar>
                </ContainerDiv>
            </div>
        )
    }
}
