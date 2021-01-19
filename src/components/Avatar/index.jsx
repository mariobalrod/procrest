import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Avatar = (props) => {
  return (
    <Link rel="stylesheet" className="containerAvatar" to="/profile">
      {props.username.charAt(0).toUpperCase()}
    </Link>
  );
};

export default Avatar;
