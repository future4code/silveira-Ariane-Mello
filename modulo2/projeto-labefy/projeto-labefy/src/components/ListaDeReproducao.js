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

const ContainerLista = styled.div`
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
                alert("Playlist removida com sucesso!")
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
                    <button onClick={() => this.props.detalhesPlaylist(user.id)}>➕</button>
                    {user.name}
                    <button onClick={() => this.deletarPlaylist(user.id)}>Excluir</button>
                </div>
            </div>
        })

        return (
            <ContainerDiv>
                <ContainerLista>
                    <h1>Labefy ▶️</h1>
                    <h2>Veja suas playlists 🎵</h2>
                    {listaDePlaylists}
                    <button onClick={this.props.irParaHome}>Voltar</button>
                </ContainerLista>
            </ContainerDiv>
        )
    }
}
