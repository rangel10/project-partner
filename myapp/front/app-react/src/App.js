import React, { Component } from 'react';
import './App.css';

class App extends Component { 

  register(){
    console.log("jeje");
  }  

  render() {
    return (
        
      <div>
        <section class="login-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 login-sec">
                        <h2 class="text-center">Iniciar Sesión</h2>
                        <form class="login-form">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="text-uppercase"> Usuario </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase">Contraseña </label>
                                <input type="password" class="form-control" placeholder=""></input>
                            </div>
                            
                        </form>
                        <div class="row">

                        <div class="col-md-4"> 
                          <button class="btn btn-login"> Ingresar </button>
                          
                        </div>
                        <div class="col-md-4">

                        <button onClick={ this.register } class="btn btn-login"> Registrate Aquí </button>
                        
                        </div>

                        </div>
                        <div class="copy-text">Created with <i class="fa fa-heart"></i> by Juan Sebastian Ramos y Camilo Anzola </div>
                    </div>

                    <div class="col-md-8 banner-sec">
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
