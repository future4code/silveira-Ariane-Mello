import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CriarPlaylist from './components/CriarPlaylist';
import { createGlobalStyle } from 'styled-components';
import ListaPlaylist from './components/ListaPlaylist';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaLista={this.irParaLista} />
        case "listaMusicas":
        return <ListaPlaylist irParaCriar={this.irParaCriar} />
      default:
        return <div>Erro! Página não encontrada</div> 
    }
  }

  irParaCriar = () => {
    this.setState({ telaAtual: "criarPlaylist" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "listaMusicas" })
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        {this.escolheTela()}
      </div>
    )
  }
}
