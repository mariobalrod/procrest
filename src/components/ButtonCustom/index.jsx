import React from "react";
import "./styles.css";

const ButtonCustom = (props) => {
  return <button className="outline" type="button">{props.text}</button>;
};

export default ButtonCustom;

