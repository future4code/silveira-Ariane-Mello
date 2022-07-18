import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './MinhasFotos/minha-foto.jpeg';
import FotoUnip from './MinhasFotos/unip.jpg';
import FotoAnhembi from './MinhasFotos/anhembi.jpg';
import FotoLinkedin from './MinhasFotos/linkedin.png';
import FotoGithub from './MinhasFotos/github.png';
import IconEmail from './MinhasFotos/email.png';
import IconLocalizacao from './MinhasFotos/localizacao.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados Pessoais</h2>
        <CardGrande
          imagem={FotoPerfil}
          nome="Prazer, eu sou a Ariane :)"
          descricao="Aos 28 anos, sou estudante de Full Stack Web Developer na Labenu."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png"
          texto="Ver mais"
        />
      </div>

        <CardPequeno
          imagem={IconEmail}
          nome="E-mail:"
          descricao="arianedemello@outlook.com"
        />

        <CardPequeno
          imagem={IconLocalizacao}
          nome="Endereço:"
          descricao="4472, Price Ave Gull Lake - Saskatchewan."

        />

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
          imagem={FotoUnip}
          nome="UNIP"
          descricao="Graduada em Nutrição 2015 - 2019."
        />

        <CardGrande
          imagem={FotoAnhembi}
          nome="Anhembi Morumbi"
          descricao="Graduada em Gastronomia 2013 - 2014."
        />
      </div>

      <div className="page-section-container">
        <h2>Redes Sociais</h2>
        <ImagemButton
          imagem={FotoLinkedin}
          texto="LinkedIn"
        />

        <ImagemButton
          imagem={FotoGithub}
          texto="GitHub"
        />
      </div>
    </div>
  );
}

export default App;
