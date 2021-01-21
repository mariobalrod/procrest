import React from 'react';
import "./style.css";
import carrusel1 from './images/carrusel1.jpg';
import carrusel2 from './images/carrusel2.jpg';
import carrusel3 from './images/carrusel3.jpg';
import carrusel4 from './images/carrusel4.jpg';

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
        <div className="carousel-item active w-100">
          <img
            className="d-block w-100"
            src={carrusel1}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item w-100">
          <img
            className="d-block w-100"
            src={carrusel2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item w-100">
          <img
            className="d-block w-100"
            src={carrusel3}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item w-100">
          <img
            className="d-block w-100"
            src={carrusel4}
            alt="Second slide"
          />
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