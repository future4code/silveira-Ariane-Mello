import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerLista = styled.div`
background-color: #EDD8E6;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerPlaylist = styled.div`
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

export default class ListaDeReproducao extends React.Component {
    state = {
        playlists: [],

    }
    componentDidMount() {
        this.verPlaylist()

    }


    verPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "ariane-mello-silveira"
            }

        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
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
                this.verPlaylist()
            })

            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaDePlaylists = this.state.playlists.map((user) => {
            return <div key={user.id}>
                <div>
                    <button onClick={() => this.props.detalhesPlaylist(user.id)}>Detalhes</button>
                    {user.name}
                    <button onClick={() => this.deletarPlaylist(user.id)}>🗑️</button>
                </div>
            </div>
        })


        return (
            <div>
                <ContainerLista>
                    <ContainerPlaylist>
                        <h2>Veja suas Playlists 🎧</h2>
                        {listaDePlaylists}
                        <button onClick={this.props.irParaHome}>Voltar</button>
                    </ContainerPlaylist >
                </ContainerLista>
            </div>
        )
    }
}
