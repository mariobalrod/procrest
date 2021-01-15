import React from 'react';
import useConnect from './connect';

const Root = () => {
  const { isLoading, login, me } = useConnect();

  if (isLoading) return <>Loading...</>;

  if (me) {
      return (
        <h1>Hola {me.id}</h1>
      );
  }

  return (
    <div>
        {console.log(me)}
      <button
        onClick={() =>
          login({
            identifier: "admin@gmail.com",
            password: "Admin123",
          })
        }
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
}

export default Root
