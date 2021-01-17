import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <button
      className="btn btn-primary boton"
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
