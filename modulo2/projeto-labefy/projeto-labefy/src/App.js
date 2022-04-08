import React from 'react'
import CriarPlaylist from './components/CriarPlaylist'
import ListaDeReproducao from './components/ListaDeReprodução'
import DetalhesPlaylist from './components/DetalhesPlaylist'
import AddMusica from './components/AddMusica'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist",
    idPlayList: "",
    namePlaylist: ""

  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaListaPlaylist={this.irParaListaPlaylist} />
      case "listaplaylist":
        return <ListaDeReproducao detalhesPlaylist={this.detalhesPlaylist} irParaHome={this.irParaHome} />
      case "detalhes":
        return <DetalhesPlaylist idPlaylist={this.state.idPlayList} namePlaylist={this.state.namePlaylist} irParaHome={this.irParaHome} />
      case "detalhes":
    }
  }

  irParaListaPlaylist = () => {
    this.setState({ telaAtual: "listaplaylist" })
  }

  irParaHome = () => {
    this.setState({ telaAtual: "criarplaylist" })
  }

  detalhesPlaylist = (id, name) => {
    this.setState({ telaAtual: "detalhes", idPlayList: id, namePlaylist: name })
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.escolheTela()}
      </div>
    )
  }
}