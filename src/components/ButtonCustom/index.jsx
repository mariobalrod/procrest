import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

const ButtonCustom = (props) => {
  return <Link to={props.to} className="outline">{props.text}</Link>;
};

export default ButtonCustom;

