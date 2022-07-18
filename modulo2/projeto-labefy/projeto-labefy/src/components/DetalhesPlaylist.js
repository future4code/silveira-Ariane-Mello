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

const ContainerDetalhes = styled.div`
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

const headers = {
    headers: {
        Authorization: "ariane-mello-silveira"

    }
}

export default class DetalhesPlaylist extends React.Component {
    state = {
        nomeMusica: "",
        artista: "",
        url: "",
        detalhes: []
    }
    componentDidMount() {
        this.detalhesDaPlaylist()
    }
    onChangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }
    onChangeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }
    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }
    addMusicas = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

        axios.post(url, body, headers)
            .then((res) => {
                this.setState({ nomeMusica: "", artista: "", url: "" })
                alert("Música adicionada com sucesso!")
            })
            .catch((err) => {
                alert("Erro! Preencha todos os campos")
            })
    }

    detalhesDaPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`
        axios.get(url, headers)
            .then((res) => {
                this.setState({ detalhes: res.data.result.tracks })
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const detalhesPlaylist = this.state.detalhes.map((informa) => {
            return (
                <div key={informa.id}>
                    <li>{informa.name} - {informa.artist}</li>
                    <audio width="300" height="32" controls="controls" src={informa.url} type="audio/mp3"></audio>
                </div>
            )
        })

        return (
            <ContainerDiv>
                <ContainerDetalhes>
                    <h1>Labefy ▶️</h1>
                    <h2>Curta suas músicas 🔊</h2>
                    {detalhesPlaylist}
                    <input
                        placeholder={"Nome da música"}
                        value={this.state.nomeMusica}
                        onChange={this.onChangeNomeMusica}
                    />
                    <input
                        placeholder={"Nome do(a) cantor/banda"}
                        value={this.state.artista}
                        onChange={this.onChangeArtista}
                    />
                    <input
                        placeholder={"Link da música"}
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                    <button onClick={this.addMusicas}>Adicionar</button>
                    <button onClick={this.props.irParaHome}>Voltar</button>
                </ContainerDetalhes>
            </ContainerDiv>
        )
    }
}
