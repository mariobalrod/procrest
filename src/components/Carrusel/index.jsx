import React from 'react';
import "./style.css";
import carrusel1 from './carrusel/carrusel1.jpg';
import carrusel2 from './carrusel/carrusel2.jpg';
import carrusel3 from './carrusel/carrusel3.jpg';
import carrusel4 from './carrusel/carrusel4.jpg';
import Icon from './carrusel/arrow-down-circle.svg';

function Carrusel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner ">
        <div className="carousel-item ">
          <img className="d-block w-100" src={carrusel1} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block my-auto">
            <h5>Descubre nuestras categorias</h5>
            <p>Próximamente ofreceremos una mayor variedad de categorias</p>
            <img src={Icon} alt="iconDown" style={{ color: "white" }} />
          </div>
        </div>
        <div className="carousel-item ">
          <img className="d-block w-100" src={carrusel2} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block my-auto">
            <h5>Descubre nuestras categorias</h5>
            <p>Próximamente ofreceremos una mayor variedad de categorias</p>
            <img src={Icon} alt="iconDown" style={{ color: "white" }} />
          </div>
        </div>
        <div className="carousel-item ">
          <img className="d-block w-100" src={carrusel3} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block my-auto">
            <h5>Descubre nuestras categorias</h5>
            <p>Próximamente ofreceremos una mayor variedad de categorias</p>
            <img src={Icon} alt="iconDown" style={{ color: "white" }} />
          </div>
        </div>
        <div className="carousel-item active">
          <img className="d-block w-100" src={carrusel4} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block my-auto">
            <h5>Descubre nuestras categorias</h5>
            <p>Próximamente ofreceremos una mayor variedad de categorias</p>
            <img src={Icon} alt="iconDown" style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}

export default Carrusel;