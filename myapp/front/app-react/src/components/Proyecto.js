import React, { Component } from 'react';
import "../App.css"

class Proyecto extends Component { 

    constructor(){
        super();
        this.state={
          comento:false
        }
    }

    comentar(){
      this.setState({comento:true});
    }


  render() {

    // Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
function getUrlVars() {
  return window.location.pathname.split(".")[0].split("/")[3];
}

var proyectNumber = getUrlVars();

let titulo = null;
let reviews = null;
let descripcion = null;
let dinero = null;
let vacantes = null;
let imagen = null;
let comentario = null;

if(this.state.comento)
{
comentario = <div><p></p><p>Tu comentario ha sido entregado con éxito al propietario del proyecto</p></div>
}

if(!this.state.comento)
{
  comentario =<div><p></p>
              <textarea class="text" name='comment' id='comment'></textarea>
              <p></p>
              <button onClick={ this.comentar.bind(this) }>Comentar</button></div>
}

if(proyectNumber==1)
{
  titulo = <h3 class="product-title">Proyecto agua segura</h3>
  reviews = <span class="review-no">41 reviews</span>
  descripcion = <p class="product-description">Este proyecto busca implementar nuevas tecnologías en pro de la conservación y purificación del agua. El objetivo es poder brindar agua de ex elente calidad a las personas de pueblos lejanos que no tienen acceso a este tipo de agua.</p>
  dinero = <h4 class="price">recursos necesarios <span>$40.000.000</span></h4>
  vacantes = <p>Ingenieros ambientales y civiles, expertos en hidrología y en mecánica, contadores</p>
  imagen = <div class="tab-pane active" id="pic-1"><img src="http://sistemab.org/wp-content/uploads/2017/11/logo-agua-segura.png" /></div>
}

if(proyectNumber==2)
{
  titulo = <h3 class="product-title">Smart houses</h3>
  reviews = <span class="review-no">67 reviews</span>
  descripcion = <p class="product-description">Este proyecto tiene como objetivo implementar un sistema IoT (Internet Of Things) que permita la conectividad y comunicación de los aparatos electrónicos de las casas y así mismo que sea accesible para hogares de clase media.</p>
  dinero = <h4 class="price">recursos necesarios <span>$2.600.000.000</span></h4>
  vacantes = <p>Ingenieros electrónicos y de sistemas, expertos en domótica e IoT, contadores</p>
  imagen = <div class="tab-pane active" id="pic-1"><img src="https://amrank.info/wp-content/uploads/2018/07/Smart-home-features-your-clients-will-be-asking-about-now-and-in-the-future.png" /></div>
}

if(proyectNumber==3)
{
  titulo = <h3 class="product-title">Vehículos autónomos</h3>
  reviews = <span class="review-no">82 reviews</span>
  descripcion = <p class="product-description">Este proyecto busca trabajar en el área de los vehículos autónomos con el objetivo de desarrollar un sistema que permita la comunicación entre vehículos inteligentes autónomos, con el objetivo de reducir la congestión y el tráfico en una ciudad como Bogotá.</p>
  dinero = <h4 class="price">recursos necesarios <span>$800.000.000</span></h4>
  vacantes = <p>Ingenieros mecánicos y de sistemas, expertos en aprendizaje de máquinas.</p>
  imagen = <div class="tab-pane active" id="pic-1"><img src="https://i.ytimg.com/vi/xTD76Cu4Fak/maxresdefault.jpg" /></div>
}

if(proyectNumber==4)
{
  titulo = <h3 class="product-title">Ayuda social a los niños de la fundación Manos pintadas</h3>
  reviews = <span class="review-no">39 reviews</span>
  descripcion = <p class="product-description">Este proyecto busca ayudar a la fundación de niños huérfanos "Manos de Amor" que se ubica en la ciudad de Bucaramanga, con el objetivo de reestructurarla y dar una base sólida para su funcionamiento posterior.</p>
  dinero = <h4 class="price">recursos necesarios <span>$75.000.000</span></h4>
  vacantes = <p>Trabajadores sociales, psicólogos, economistas, voluntarios</p>
  imagen = <div class="tab-pane active" id="pic-1"><img src="https://cdni.rt.com/actualidad/public_images/8ba/8baad1346072a0029c54f17d2c213ba3_article.jpg" /></div>
}

    return (
        
      <div>

      <div class="container">
    <div class="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            
            <div class="preview-pic tab-content">
              
            {imagen}

            </div>
            
          
            
          </div>
          <div class="details col-md-6">

            {titulo}

            <div class="rating">
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              
              {reviews}

            </div>
            
            {descripcion}

            {dinero}

            
            <h5 class="sizes">vacantes:
              
              {vacantes}

            </h5>
            
            <div class="action">
              <button class="add-to-cart btn btn-default" type="button">Donar</button>

              <button class="add-to-cart btn btn-default" type="button">Unirse</button>

              <div>
              {comentario}
            </div>

            


          </div>
        </div>
      </div>
    </div>
  </div>
        
      </div>
      </div>
      
    );
  }
}

export default Proyecto;