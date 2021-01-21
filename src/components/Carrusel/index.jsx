import React from 'react';
import "./style.css";
import carrusel1 from '../../assets/carrusel/carrusel1.jpg';
import carrusel2 from '../../assets/carrusel/carrusel2.jpg';
import carrusel3 from '../../assets/carrusel/carrusel3.jpg';
import carrusel4 from '../../assets/carrusel/carrusel4.jpg';

function Carrusel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    <img className="d-block w-100" src={carrusel1} alt="Second slide" />

                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={carrusel2} alt="Second slide" />

                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={carrusel3} alt="Second slide" />

                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={carrusel4} alt="Second slide" />

                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
}

export default Carrusel;