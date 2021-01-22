import React from "react";
import './styles.css';
import useConnect from './connect';
import { Redirect } from "react-router-dom";

import LogoutIcon from '../../../assets/logOut.svg';
import Avatar from '../../../components/Avatar';
import CardApartment from '../../../components/CardApartment';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';

const Profile = () => {
  const { isAuth, isLoading, handleLogout, me } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: "white" }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }

  if (!isAuth) return (
    <Redirect to="/" />
  )

  return (
    <div>
      <div  id="logout" >
        <button className="logout"onClick={handleLogout}>
          <img src={LogoutIcon} alt="logout" />
        </button>
      </div>
      <div className="contenido">
        <div id="iconoUser">
          <Avatar
            username={me.username}
            size="big"
          />
        </div>
        <h1>Historial de reservas</h1>
        <div className="cartasPerfil">
          <div id="fila1">
            <CardApartment
              hasButtom={false}
              name="Casa Palacio"
              image="https://i.imgur.com/TEfwhA3.jpg"
              description="Monasterio del s.XVIII completamente remodelado con las máximas comodidades convertido en un lugar único.
              Capacidad para 20 personas.
              6 baños completos."
            />
            <CardApartment
              hasButtom={false}
              name="Nilgar"
              image="https://i.imgur.com/DAXSN4U.jpg"
              description="Ideal para 5 personas.
              2 habitaciones. 
              Jardín cerrado.
              Jacuzzi."
            />
            <CardApartment
              hasButtom={false}
              name="Cabaña Lalo"
              image="https://i.imgur.com/RF8xFpn.png"
              description="Piscina-Jacuzzi en una gruta volcánica, climatizada.
              Capacidad para 8 personas.
              6 habitaciones con baños propios."
            />
          </div>
          <div id="fila2">
            <CardApartment
              hasButtom={false}
              name="Girante"
              image="https://i.imgur.com/JDgCOjQ.jpg"
              description="Solárium con hamacas.
              Zona de hamacas en los jardines.
              Capacidad para 10 personas.
              7 baños completos."
            />
            <CardApartment
              hasButtom={false}
              name="Quitan linda"
              image="https://imgur.com/hlX0QSn.jpg"
              description="Espectacular villa situada entre la playa y el monte.
              Para 10 personas.
              5 habitaciones dobles.
              6 baños completos."
            />
            <CardApartment
              hasButtom={false}
              name="Caloan"
              image="https://i.imgur.com/LBKlckX.jpg"
              description="Diseñado para una escapada romántica para 2 personas en un entorno muy privado, tranquilo y hermoso, con vistas de largo alcance.
              1 habitación.
              2 baños."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
