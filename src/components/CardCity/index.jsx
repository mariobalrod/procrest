import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <div className="container">
      <img
        src={props.cityimage}
        className="card-img-top"
        alt="cardImage"
      />
      <div className="card-body">
        <h5 className="card-title">{props.citytext}</h5>
      </div>
    </div>
  );
};

export default Card;