import React, { Component } from 'react';
import IniciarSesion from "./components/IniciarSesion.js";
import './App.css';

class App extends Component { 

    constructor(){
        super();
        this.login = this.login.bind(this);  //Esto no es necesario --code-review
    }

  login(){
    this.state({})   // El estado puede ir en el constructor  --code-review
  }
//login={this.login.bind(this)} esto no deberia ir en el render  --code-review
  render() {
    return (
        
      <div>

      <IniciarSesion login={this.login.bind(this)}/>  
        
      </div>
    );
  }
}

export default App;
