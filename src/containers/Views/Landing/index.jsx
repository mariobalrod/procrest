import React from "react";
import useConnect from './connect';

import './styles.css';

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
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn btn-primary"
      >
        Login
      </button>
      <button
        onClick={logout}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default Landing;
