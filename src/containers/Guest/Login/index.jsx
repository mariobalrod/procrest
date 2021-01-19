import React from 'react'
import { Link } from 'react-router-dom';
import '../styles.css'
import Button from '../../../components/Button';
import Icon from '../../../assets/IconLogo.svg'
import useConnect from './connect';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';

const Login = () => {
  const {
    isLoading,
    email,
    password,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
  } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: 'white' }} />,
  });

  if (isLoading) return <Loader indicator={indicatorEl} containerProps={containerProps} />;

  return (
    <div className="back">
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: "514px" }}>
          <div className="modal-body containerModal">
            <div className="headerModal">
              <img src={Icon} alt="iconLogo" className="iconModal" />
              <h1 className="titleModal">Inicio de sesión</h1>
            </div>
            <form style={{ width: "100%", marginTop: "60px" }} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Contraseña"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
              <div className="footerModal">
                <Link to="/register" className="linkB">
                  ¿No tienes cuenta?
                </Link>
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
