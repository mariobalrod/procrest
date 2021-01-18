import React from "react";
import logo from "../../../assets/logo.svg";
import "./styles.css";
import Button from "../../../components/ButtonCustom";

function TopBar(props) {
  return (
    <nav id="topBar" className="navbar navbar-expand-lg navbar-light">

            <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Lugares</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Alojamiento</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                <div className="botones " >
                    <li className="nav-item">
                        <Button text= "Registro"/>
                    </li>
                    <li className="nav-item " id="botonLogin">
                        <Button text= "Login"/>
                    </li>
                </div>
        </div>
        
    </nav>
  );
}

export default TopBar;
