import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const headers = {
    headers: {
        Authorization: "ariane-mello-silveira",
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class CriarUsuario extends React.Component  {
  state = {
    name:'',
    email:'',
  }
  
  createUser = () =>{
    const body = {
      name: this.state.name,
      email:this.state.email
    } 
    axios
    .post(url,body,headers)
    .then((res)=>{
      alert(`Usuário ${this.state.name} foi criado com sucesso!`);
    this.getAllUsers()
    this.setState({
      name:"",
      email:""
    })

    })
    .catch((err)=>{
        alert(`Erro ao criar o usuário`);
    })
  }
  onChangeName = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  onChangeEmail = (event) =>{
     this.setState({
        email: event.target.value
  })
}

  render(){
    return(
      <div>
        <label>
          <input value={this.state.name} onChange={this.onChangeName} placeholder = 'Nome'></input>
          <input value={this.state.email} onChange={this.onChangeEmail} placeholder = 'Email'></input>
        </label>
        <button onClick={this.createUser}>Enviar</button>

    </div>
    )
  }

}
