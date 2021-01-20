import React from "react";
import './styles.css';

import sergio from '../../../assets/sergio.png';
import mario from '../../../assets/mario.png';
import esperanza from '../../../assets/esperanza.png';

const About = () => {
  return (
    <div>
      <div className="thumAbout"/>
      <div id="contenedorTodo">
        <div id="sobreNosotros">
          <h1>Sobre Nosotros</h1>
          <p>ProCrest comenzo como todos los grandes inventos de la historia, con una simple idea. <br/> <br/>
          Eramos un grupo de tres jovenes programadores que usabamos de forma habitual una web para reservar y alquilar, <br/>
          alojamientos, para nosotros nos parecia un lujo alquilar un apartamento o cualquier alojamiento, <br/>
          para desconectar de la vida cotidiana, pero la gran mayoria de estos apartamentos tenian una calidad pesima. <br/>
          Hasta que llegamos nosotros y creamos ProCrest donde puedes alquilar cualquier alojamiento que todos son un lujo exquisito.
        </p>
        </div>
        <h1>Fundadores</h1>
        <div id="fundadores">
          <div id="sergio">
            <img src={sergio} alt="sergio"/>
            <h3>Sergio Ávila</h3>
          </div>
          <div id="mario">
            <img src={mario} alt="mario"/>
            <h3>Mario Ballestero</h3>
          </div>
          <div id="esperanza">
            <img src={esperanza} alt="esperanza"/>
            <h3>Esperanza Del Junco</h3>
          </div>
        </div>
        <div id="contacto">
          <h1>Contacto</h1>
          <p>Para hacernos llegar cualquier duda de aspecto general con relacion a la prensa contacte con nosotros.</p>
          <h4>ProCrest-prensa@procrest.es</h4>
          <br/>
          <p>Para hacernos llegar cualquier duda sobre nuestros servicios contacte con nosotros</p>
          <h4>ProCrest-help@procrest.es</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
