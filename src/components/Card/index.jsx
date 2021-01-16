import React from "react";
import Button from "../Button";

const Card = () => {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img
        src="https://picsum.photos/id/237/200/200"
        className="card-img-top"
        alt="cardImage"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button type="button" text="Button" />
      </div>
    </div>
  );
};

export default Card;
