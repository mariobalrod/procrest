import React from "react";
import './styles.css';

import CardCategory from '../../../components/CardCategory'
import Carrusel from '../../../components/Carrusel'

const Categories = () => {
  return (
    <div>
      <Carrusel />
      <h1> Categorias </h1>
      <div id="categorias">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <CardCategory
                imagen="thumYurtas"
                titulo="Yurtas"
                descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
              />
            </div>
            <div className="col">
              <CardCategory
                imagen="thumGlamping"
                titulo="Glamping"
                descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
              />
            </div>
            <div className="col">
              <CardCategory
                imagen="thumCastillos"
                titulo="Castillos"
                descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
              />
            </div>
            <div className="col">
              <CardCategory
                imagen="thumChalets"
                titulo="Chalets"
                descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
              />
            </div>
            <div className="col">
              <CardCategory
                imagen="thumRurales"
                titulo="Rurales"
                descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;






