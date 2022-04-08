import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerCriar = styled.div`
background-color: #EDD8E6;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerNome = styled.div`
border: 5px outset #CACCDF; 
border-radius: 80px;
margin: 15px;
padding: 15px;
text-align: center;
width: 30vw;
height: 50vh;
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
                color: #D30070;
                background: #CACCDF;
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
                alert("Erro! Preencha o Nome da sua Playlist")
            })
    }

    render() {
        return (
            <div>
                <ContainerCriar>
                    <ContainerNome>
                        <h2>Crie suas Playlists aqui 🎧</h2>
                        <input
                            placeholder={"Nome da sua Playlist"}
                            value={this.state.nomePlaylist}
                            onChange={this.handleNomePlaylist}
                        />
                        <button onClick={this.criarPlaylist}>Criar Playlists</button>
                        <button onClick={this.props.irParaListaPlaylist}>Veja suas Playlists</button>
                    </ContainerNome>
                </ContainerCriar>
            </div>
        )
    }
}