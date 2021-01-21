import React from "react";
import './styles.css';

import CardCategory from '../../../components/CardCategory'
import Carrusel from '../../../components/Carrusel'

const Categories = () => {
  return (
    <div>
      <Carrusel />
      <h1 id="titleCategory"> Categorias </h1>
      <div className="categoriesContainer">
        <CardCategory
          imagen="thumYurtas"
          titulo="Yurtas"
          descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
        />
        <CardCategory
          imagen="thumGlamping"
          titulo="Glamping"
          descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
        />
        <CardCategory
          imagen="thumCastillos"
          titulo="Castillos"
          descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
        />
        <CardCategory
          imagen="thumChalets"
          titulo="Chalets"
          descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
        />
        <CardCategory
          imagen="thumRurales"
          titulo="Rurales"
          descripcion="Suresh Dasari is a founder and technical lead developer in tutlane."
        />
      </div>
    </div>
  );
};

export default Categories;






