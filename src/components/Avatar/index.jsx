import React from "react";
import "./styles.css";

const Avatar = (props) => {
  return (
    <a rel="stylesheet" className="container" href="/profile">
      {props.username.charAt(0).toUpperCase()}
    </a>
  );
};

export default Avatar;
