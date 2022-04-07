import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerCriar = styled.div`
background-color: #EDD8E6;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerNome = styled.div`
border: 5px outset #CACCDF; 
text-align: center;
width: 25vw;
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
            &:hover{
                color: #D30070;
                background: #CACCDF;
    }
`
const Botao1 = styled.div`
line-height: 30px;
`

const Botao2 = styled.div`
line-height: 30px;
`

export default class CriarPlaylist extends React.Component {
    state = {
        nome: "",
    }

    handleNomePlaylist = (event) => {
        this.setState({ nome: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome,
        }

        axios.post(url, body, {
            headers: {
                Authorization: "ariane-mello-silveira"
            }
        })

            .then((res) => {
                alert("Playlist criada com sucesso!")
                this.setState({ nome: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
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
                            value={this.state.nome}
                            onChange={this.handleNomePlaylist}
                        />
                        <Botao1>
                        <button onClick={this.criarPlaylist}>Criar Playlists</button>
                        </Botao1>
                        <Botao2>
                        <button onClick={this.props.irParaLista}>Minhas Playlists</button>
                        </Botao2>
                    </ContainerNome>
                </ContainerCriar>
            </div>
        )
    }
} 