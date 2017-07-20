import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Label from './componentes/labels/Label';
import Button from './componentes/buttons/Button';
import Form from './componentes/form/Form';

const initialState = {
      name : '',
      message: 'Nenhuma mensagem ainda...'
}

class App extends Component {

  constructor(props){
    super(props)
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onOkClick = this.onOkClick.bind(this);
  }

  onOkClick(){
    this.setState({
      message : 'O botao OK foi clicado!'
    });
  }

  onEditClick(){
    this.setState({
      message : 'O botao Edit foi clicado!'
    });
  }

  onCancelClick(){
    this.setState({
        message : 'O botao CANCELAR foi clicado!'
    });
  }

  onSuccessClick(){
    this.setState({
        message : 'O botao SUCCESS foi clicado!'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
