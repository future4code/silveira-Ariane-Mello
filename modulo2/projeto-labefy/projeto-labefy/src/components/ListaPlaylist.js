import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerLista = styled.div`
background-color: #EDD8E6;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerPlaylist = styled.div`
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

export default class ListaPlaylist extends React.Component {
    state = {
        playlist: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "ariane-mello-silveira"
            }
        })
            .then((res) => {
                this.setState({ playlist: res.data.result.list })
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ariane-mello-silveira"
            }
        })

            .then((res) => {
                alert("Playlist deletada com sucesso!")
                this.pegarPlaylist()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaMusicas = this.state.playlist.map((user) => {
            return <div key={user.id}>
                {user.name}
                <button onClick={() => this.deletarPlaylist(user.id)}>X</button>
            </div>
        })

        return (
            <div>
                <ContainerLista>
                    <ContainerPlaylist>
                        <h2>Veja suas Playlists aqui 🎧</h2>
                        {listaMusicas}
                    </ContainerPlaylist>
                </ContainerLista>
            </div>
        )
    }
} 