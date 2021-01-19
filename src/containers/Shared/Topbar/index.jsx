import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import "./styles.css";
import Button from "../../../components/ButtonCustom";
import Avatar from "../../../components/Avatar";

function TopBar(props) {
  return (
    <nav id="topBar" className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ml-auto" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Sobre nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cities">
              Ciudades
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Categorias
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/apartments">
              Alojamientos
            </Link>
          </li>
        </ul>

        {props.user ? (
          <Avatar username={props.user.username} />
        ) : (
          <div className="botones ">
            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#registerModal">
              <Button text="Registro" />
            </li>
            <li className="nav-item " id="botonLogin" data-bs-toggle="modal" data-bs-target="#loginModal">
              <Button text="Login" />
            </li>
          </div>
        )}
      </div>
    </nav>
  );
}

export default TopBar;
