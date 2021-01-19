import React from "react";
import "./styles.css";

const CardCity = (props) => {
  return (
    <div className="containerCity">
      <div
        style={{background: `url(${props.cityimage}) no-repeat`, backgroundSize: 'cover'}}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{props.citytext}</h5>
      </div>
    </div>
  );
};

export default CardCity;