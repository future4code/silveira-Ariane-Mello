import React from 'react'
import CriarPlaylist from './components/CriarPlaylist'
import ListaDeReproducao from './components/ListaDeReproducao'
import DetalhesPlaylist from './components/DetalhesPlaylist'
import { createGlobalStyle } from 'styled-components';
import styledComponents from 'styled-components'
import axios from 'axios'

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
        return <DetalhesPlaylist idPlayList={this.state.idPlayList} namePlaylist={this.state.namePlaylist} irParaHome={this.irParaHome} />
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  irParaListaPlaylist = () => {
    this.setState({ telaAtual: "listaplaylist" })
  }

  irParaHome = () => {
    this.setState({ telaAtual: "criarplaylist" })
  }

  detalhesPlaylist = (id, name) => {
    this.setState({ telaAtual: "detalhes", idPlayList: id, namePlalyist: name })
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
