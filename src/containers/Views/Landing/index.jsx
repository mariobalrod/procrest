import React from "react";
import useConnect from './connect';
import './styles.css';

import Carrusel from "../../../components/Carrusel"

const Landing = () => {
  const { isLoading, login, logout } = useConnect();

  if (isLoading) return <>Loading login...</>

  return (
    <div>
      Landing
      <button
        onClick={() =>
          login({ identifier: "admin@gmail.com", password: "Admin123" })
        }
        type="button"
        className="btn btn-primary"
      >
        Login
      </button>
      <button
        onClick={logout}
        type="button"
        className="btn btn-primary"
      >
        Logout
      </button> 
    </div>
  );
};

export default Landing;
