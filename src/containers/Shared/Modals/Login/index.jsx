import React from 'react'
import '../styles.css'
import Button from '../../../../components/Button';
import Icon from '../../../../assets/IconLogo.svg'
import useConnect from '../connect';

const Login = (props) => {
  const {
    goHome,
  } = useConnect();

  return (
    <div
      className="modal fade"
      id="loginModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: "514px" }}>
          <div className="modal-body containerModal">
            <div className="headerModal">
              <img src={Icon} alt="iconLogo" className="iconModal" />
              <h1 className="titleModal">Inicio de sesión</h1>
            </div>
            <form style={{ width: "100%", marginTop: "60px" }} onSubmit={props.handleSubmit}>
              <div className="mb-4">
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
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
                  id="exampleInputPassword1"
                  value={props.password}
                  onChange={props.handleChangePassword}
                />
              </div>
              <div className="footerModal">
                <button onClick={goHome} className="linkB">
                  ¿No tienes cuenta?
                </button>
                <Button type="submit" text="Iniciar sesión" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
