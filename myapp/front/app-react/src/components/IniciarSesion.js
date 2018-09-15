import React, { Component } from "react";

export default class LogIn extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
            mensaje: "Iniciar Sesión",
            nombre: null

		};
	}

    register(){

    this.setState({mensaje:"Registrate"});

    }

    login(){
        this.setState({mensaje:"Iniciar Sesión"});
    }  

	render () {

        let nombre = null;
        let botones = null;
		
        if(this.state.mensaje == "Registrate")
        {
            nombre = (<div><label for="exampleInputEmail1" class="text-uppercase"> Nombre </label>
                                <input type="text" class="form-control" placeholder=""></input></div>)
        }

        if(this.state.mensaje == "Iniciar Sesión")
        {
            botones =( <div class="row"><div class="col-md-4"> 
                          <button onClick={ this.login.bind(this) } class="btn btn-login"> Ingresar </button>
                          
                        </div>
                        <div class="col-md-4">

                        <button onClick={ this.register.bind(this) } class="btn btn-login"> Registrate Aquí </button>
                        
                        </div> </div>)
        }

        if(this.state.mensaje == "Registrate")
        {
            botones =( <div class="row">

                          <button onClick={ this.login.bind(this) } class="btn btn-login"> Registrarme </button>
                          
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
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase">Contraseña </label>
                                <input type="password" class="form-control" placeholder=""></input>
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