import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDetalhes = styled.div`
background-color: #EDD8E6;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerDetalhesPlaylist = styled.div`
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
        margin: 5px;
        padding: 3px;
        cursor: pointer;
            &:hover{
                color: #D30070;
                background: #CACCDF;
    }
`

const headers = {
    headers: {
        Authorization: "ariane-mello-silveira"

    }
}

export default class DetalhesPlaylist extends React.Component {
    state = {
        detalhes: []
    }
    componentDidMount() {
        this.detalhesDaPlaylist()
    }
    detalhesDaPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
        axios.get(url, headers)

            .then((res) => {
                console.log(res.data)
                this.setState({ detalhes: res.data.result.tracks })

            })
            .catch((err) => {
                console.log("Erro, tente novamente!!!")

            })
    }

    render() {
        const detalhesPlaylist = this.state.detalhes.map((informa) => {
            return (
                <div key={informa.id}>
                    <p>{informa.name} - {informa.artist}</p>
                    <audio src={informa.url} controls loop></audio>
                </div>
            )
        })

        return (
            <div>
                <ContainerDetalhes>
                    <ContainerDetalhesPlaylist>
                        <h2>Detalhes das suas Playlists 🎧</h2>
                        {detalhesPlaylist}

                        <input
                            placeholder={"Nome da Música"}
                            value={this.state.nomePlaylist}
                            onChange={this.handleNomePlaylist}
                        />
                        <input
                            placeholder={"Nome do(a) Artista"}
                            value={this.state.nomePlaylist}
                            onChange={this.handleNomePlaylist}
                        />
                        <input
                            placeholder={"URL da Música"}
                            value={this.state.nomePlaylist}
                            onChange={this.handleNomePlaylist}
                        />
                        <button onClick={this.props.AddMusica}>Adicionar Música</button>
                        <button onClick={this.props.irParaHome}>Voltar</button>
                    </ContainerDetalhesPlaylist>
                </ContainerDetalhes>
            </div>
        )
    }
}