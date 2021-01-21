import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Avatar = (props) => {

  if (props.size === "big") {
    return (
      <div  className="bigAvatar" >
        {props.username.charAt(0).toUpperCase()}
      </div>
    );  
  }
  
  return (
    <Link rel="stylesheet" className="containerAvatar" to="/profile">
      {props.username.charAt(0).toUpperCase()}
    </Link>
  );
};

export default Avatar;
