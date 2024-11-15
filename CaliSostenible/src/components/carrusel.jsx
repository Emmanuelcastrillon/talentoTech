import React from 'react';
import siembra from '../images/siembraArboles.jpeg';
import limpieza from '../images/limpiezaRios.jpg';
import rio from '../images/rioPance.jpeg';
import '../styles/carrusel.css';

function carrusel() {
  return (
    <div className='carrusel'>
        
      <div className='contenedorCarrusel'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="5000" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={siembra} className="d-block w-100 imageCarrusel" alt="siembra" />
                
              </div>
              
              <div className="carousel-item">
                <img src={limpieza} className="d-block w-100 imageCarrusel" alt="limpieza" />
              
              </div>
              <div className="carousel-item">
                <img src={rio} className="d-block w-100 imageCarrusel" alt="rio" />
               
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>

    </div>
  )
}

export default carrusel