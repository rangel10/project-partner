import React, { Component } from 'react';
import Proyecto from "./components/Proyecto.js";
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

class user extends Component{

	constructor (props) {

		super(props);
		this.state = {
			like1:false,
			like2:false,
			like3:false,
			like4:false
		}
	}

like1(){
this.setState({like1:true});
}

like2(){
this.setState({like2:true});
}

like3(){
this.setState({like3:true});
}

like4(){
this.setState({like4:true});
}

verProyecto1(){
	browserHistory.push("/usuarios/proyecto/1");
        ReactDOM.render(<Proyecto />, document.getElementById("root"));
}

verProyecto2(){
	browserHistory.push("/usuarios/proyecto/2");
        ReactDOM.render(<Proyecto />, document.getElementById("root"));
}

verProyecto3(){
	browserHistory.push("/usuarios/proyecto/3");
        ReactDOM.render(<Proyecto />, document.getElementById("root"));
}

verProyecto4(){
	browserHistory.push("/usuarios/proyecto/4");
        ReactDOM.render(<Proyecto />, document.getElementById("root"));
}

	render(){

		let likeBut1 = null;
		let likeBut2 = null;
		let likeBut3 = null;
		let likeBut4 = null;

		if(this.state.like1)
		{
			likeBut1 = <button class="button button-like liked" onClick={ this.like1.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}
		if(!this.state.like1){ //esto pueder ser reemplazado por un else
			likeBut1 = <button class="button button-unlike" onClick={ this.like1.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}

		if(this.state.like2)
		{
			likeBut2 = <button class="button button-like liked" onClick={ this.like2.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}
		if(!this.state.like2){  //esto pueder ser reemplazado por un else
			likeBut2 = <button class="button button-unlike" onClick={ this.like2.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}

		if(this.state.like3)
		{
			likeBut3 = <button class="button button-like liked" onClick={ this.like3.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}
		if(!this.state.like3){ //esto pueder ser reemplazado por un else 
			likeBut3 = <button class="button button-unlike" onClick={ this.like3.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}

		if(this.state.like4)
		{
			likeBut4 = <button class="button button-like liked" onClick={ this.like4.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}
		if(!this.state.like4){ //esto pueder ser reemplazado por un else
			likeBut4 = <button class="button button-unlike" onClick={ this.like4.bind(this) } >
  			<i class="fa fa-heart"></i>
  			<span>Like</span>
			</button>
		}

		return (
			<div>

<nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger letra" href="#page-top">Project Partner</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" letra>
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger letra" href="#portfolio" >Portafolio</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger letra" href="#about" >Buscar</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger letra" href="#contact" >Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
          <h1 class="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>

      <div class="row">
        <div class="col-md-7">
          
            <div class="img-fluid rounded mb-3 mb-md-0 imagen1"> </div>
          
        </div>
        <div class="col-md-5">
          <h3>Proyecto agua segura</h3>
          <p>Este proyecto busca implementar nuevas tecnologías en pro de la conservación y purificación del agua. El objetivo es poder brindar agua de ex elente calidad a las personas de pueblos lejanos que no tienen acceso a este tipo de agua.</p>
          <a class="btn btn-primary btnProyecto" href="#" onClick={ this.verProyecto1.bind(this) }>Ver proyecto</a>
          {likeBut1}
        </div>
      </div>
      <p>
      </p>      

      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <div class="img-fluid rounded mb-3 mb-md-0 imagen2"> </div>
          </a>
        </div>
        <div class="col-md-5">
          <h3>Smart houses</h3>
          <p>Este proyecto tiene como objetivo implementar un sistema IoT (Internet Of Things) que permita la conectividad y comunicación de los aparatos electrónicos de las casas y así mismo que sea accesible para hogares de clase media.</p>
          <a class="btn btn-primary btnProyecto" href="#" onClick={ this.verProyecto2.bind(this) }>Ver proyecto</a>
          {likeBut2}
        </div>
      </div>
      <p></p>

      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <div class="img-fluid rounded mb-3 mb-md-0 imagen3"> </div>
          </a>
        </div>
        <div class="col-md-5">
          <h3>Vehículos autónomos</h3>
          <p>Este proyecto busca trabajar en el área de los vehículos autónomos con el objetivo de desarrollar un sistema que permita la comunicación entre vehículos inteligentes autónomos, con el objetivo de reducir la congestión y el tráfico en una ciudad como Bogotá.</p>
          <a class="btn btn-primary btnProyecto" href="#" onClick={ this.verProyecto3.bind(this) }>Ver proyecto</a>
          {likeBut3}
        </div>
      </div>
		<p></p>
		<p> </p>
      

      <div class="row">

        <div class="col-md-7">
          <a href="#">
            <div class="img-fluid rounded mb-3 mb-md-0 imagen4"> </div>
          </a>
        </div>
        <div class="col-md-5">
          <h3>Ayuda social a los niños de la fundación Manos pintadas</h3>
          <p>Este proyecto busca ayudar a la fundación de niños huérfanos "Manos de Amor" que se ubica en la ciudad de Bucaramanga, con el objetivo de reestructurarla y dar una base sólida para su funcionamiento posterior.</p>
          <a class="btn btn-primary btnProyecto" href="#" onClick={ this.verProyecto4.bind(this) }>Ver proyecto</a>
          {likeBut4}
        </div>
      </div>

      
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>


    </div>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
    </footer>



			</div>
			);
	}

}
export default user;
