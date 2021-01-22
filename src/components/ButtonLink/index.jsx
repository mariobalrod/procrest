import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Buttonlink = (props) => {
  return (
    <Link
      to={props.to}
      className="btn btn-primary botonN"
      type={props.type}
    >
      {props.text}
    </Link>
  );
};

export default Buttonlink;
