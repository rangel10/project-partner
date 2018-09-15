import React, { Component } from 'react';
import IniciarSesion from "./components/IniciarSesion.js";
import './App.css';

class App extends Component { 

    constructor(){
        super();
        this.login = this.login.bind(this);
    }

  login(){
    this.state({})
  }

  render() {
    return (
        
      <div>

      <IniciarSesion login={this.login.bind(this)}/>
        
      </div>
    );
  }
}

export default App;
