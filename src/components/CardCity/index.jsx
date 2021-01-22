import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

const CardCity = (props) => {
  return (
    <Link to={`/apartments?city=${props.id}`} className="containerCity">
      <div
        style={{background: `url(${props.cityimage}) no-repeat`, backgroundSize: 'cover'}}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title-city">{props.citytext}</h5>
      </div>
    </Link>
  );
};

export default CardCity;