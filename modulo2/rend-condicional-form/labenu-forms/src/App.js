import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Container = styled.div`
text-align: center;
`
export default class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <h3>Seção inexistente.</h3>;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    return (
      <div>
        <Container>
          {this.renderizaEtapa()}
          {this.state.etapa >= 4 ? <p></p> : <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>}
        </Container>
      </div>
    )
  }
}