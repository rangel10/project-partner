import React, { Component } from "react";
import {create} from './api-user.js';
import {signin} from './api-user.js';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import User from './user.js';


export default class LogIn extends React.Component {
	constructor (props) {

		super(props);
		this.state = {
            mensaje: "Iniciar Sesión",
            nombre: null,
            email:null,
            contraseña:null,
            open: false,
            error: ''
		};
	}

    register(){

        this.setState({mensaje:"Registrate"});

    }

    login = () => {
        browserHistory.push("/usuarios");
        ReactDOM.render(<User />, document.getElementById("root"));
    
        // this.setState({mensaje:"Iniciar Sesión"});
        // const user = {
        //  email: this.state.email || undefined,
        // password: this.state.password || undefined 
    }


  
    // signin(user).then((data) => {
    //   if (data.error) {
    //     this.setState({error: data.error})
      
    //   }
    // })
  

    cambiarNombre(event){
        this.setState({nombre:event.target.value});
    }

    cambiarEmail(event){
        this.setState({email:event.target.value});
    }

    cambiarContraseña(event){
        this.setState({contraseña:event.target.value});
    }

    signUp = () => {

 fetch("/url")
    fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            nombre: "nombre1",
            email: "email1",
            contraseña: "contraseña1"
         }),
        headers: new Headers({'content-type': 'application/json'})
    })
    .then(function (response){
        response.json();

    })
    .then(function (data) {
        console.log(data);
        // Aca mete el codigo. Data es lo que retorna el post.
        this.state.nombre = data.nombre;
        this.state.email = data.email;
        this.state.contraseña = data.contraseña;
    })
  }


	render () {

        let nombre = null;
        let botones = null;
		
        if(this.state.mensaje === "Registrate")
        {
            nombre = (<div><label for="exampleInputEmail1" class="text-uppercase" > Nombre </label>
                                <input type="text" class="form-control" placeholder="" onChange={(evt)=>this.cambiarNombre(evt)}
                        required ></input></div>)
        }

        if(this.state.mensaje === "Iniciar Sesión")
        {
            botones =( <div class="row"><div class="col-md-4"> 
                          <button onClick={ this.login.bind(this) } class="btn btn-login"> Ingresar </button>
                          
                        </div>
                        <div class="col-md-4">

                        <button onClick={ this.register.bind(this) } class="btn btn-login"> Registrate Aquí </button>
                        
                        </div> </div>)
        }

        if(this.state.mensaje === "Registrate")
        {
            botones =( <div class="row">

                          <button onClick={ this.signUp.bind(this) } class="btn btn-login"> Registrarme </button>
                          
                        </div>)
        }

		return(

			<div>
			<section class="login-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 login-sec">
                        <h2 class="text-center">{this.state.mensaje}</h2>
                        <form class="login-form">

                            <div class="form-group">
                            {nombre}    
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class="text-uppercase"> Email </label>
                                <input type="text" class="form-control" placeholder="" onChange={(evt)=>this.cambiarEmail(evt)}
                        required ></input>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase">Contraseña </label>
                                <input type="password" class="form-control" placeholder="" onChange={(evt)=>this.cambiarContraseña(evt)}
                        required></input>
                            </div>
                            
                        </form>
                        

                        {botones}


                       

                       
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

