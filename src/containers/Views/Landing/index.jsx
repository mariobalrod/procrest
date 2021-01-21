import React from "react";
import './styles.css';


const Landing = () => {
  return (
    <div className="landing">
      <div className="section1">
        <h1 className="present">Encuentra el lugar de tus sueños</h1>
        <p>Estamos orgullosos de que confíes en nosotros</p>
      </div>

      <div className="section2">
        <div className="card-body">
          <div className="card-title">
            <h4 className="uno">Disfruta tus vacaciones</h4>
            <h5 className="dos">Lo facilitaremos</h5>
          </div>
          <br></br>
          <p className="card-text">
            Vive la gran riqueza cultural, gastronómica y paisajística de España
            vistando alguna de sus ciudades más populares. Encuentra tu alquiler
            vacacional o casa rural ideal y disfruta de unas vacaciones de lujo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
