import React from 'react'
import '../styles.css'
import Button from '../../../../components/Button';
import Icon from '../../../../assets/IconLogo.svg';
import useConnect from '../connect';

const Register = (props) => {
  const {
    goHome,
  } = useConnect();

  return (
    <div
      className="modal fade"
      id="registerModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: "514px" }}>
          <div className="modal-body containerModal">
            <div className="header">
              <img src={Icon} alt="iconLogo" className="icon" />
              <h1 className="title">Registro</h1>
            </div>
            <form
              style={{ width: "100%", marginTop: "60px" }}
              onSubmit={props.handleSubmit}
            >
               <div className="mb-4">
                <input
                  placeholder="Nombre de usuario"
                  type="text"
                  className="form-control"
                  value={props.username}
                  onChange={props.handleChangeUsername}
                />
              </div>
              <div className="mb-4">
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={props.email}
                  onChange={props.handleChangeEmail}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Contraseña"
                  type="password"
                  className="form-control"
                  value={props.password}
                  onChange={props.handleChangePassword}
                />
              </div>
              <div className="footer">
                <button onClick={goHome} className="linkB">
                  ¿Tienes cuenta?
                </button>
                <Button type="submit" text="Registrarse" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
