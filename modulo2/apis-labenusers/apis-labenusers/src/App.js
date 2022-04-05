import React from 'react';
import CriarUsuario from './components/CriarUsuario';
import styled from 'styled-components';
import ListarUsuario from './components/ListarUsuario';

const headers = {
  headers: {
    Authorization: "ariane-mello-silveira",
  }
}

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers"

export default class App extends React.Component {
  state = {
    pagina: "cadastro"
  };

  trocarTela = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "usuário" });
    } else {
      this.setState({ pagina: "cadastro" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.trocarTela}> Trocar tela</button>
        {this.state.pagina === "cadastro" ? <CriarUsuario /> : <ListarUsuario />}
      </div>
    )
  }
}