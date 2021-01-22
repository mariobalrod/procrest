import React from "react";
import './styles.css';
import useConnect from './connect';
import { Redirect } from "react-router-dom";

import LogoutIcon from '../../../assets/logOut.svg';
import Avatar from '../../../components/Avatar';
import CardApartment from '../../../components/CardApartment';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';
import Empty from './Empty.svg';

const Profile = () => {
  const { isAuth, isLoading, handleLogout, me, bookings } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: "white" }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }

  if (!isAuth) return <Redirect to="/" />;

  return (
    <div>
      <div id="logout">
        <button className="logout" onClick={handleLogout}>
          <img src={LogoutIcon} alt="logout" />
        </button>
      </div>
      <div className="contenido">
        <div id="iconoUser">
          <Avatar username={me.username} size="big" />
        </div>
        {bookings.length === 0 ? (
          <div id="empty">
            <h1>¿Aun no tiene ninguna reserva?</h1>
            <img src={Empty} alt="empty" />

          </div>
        ) : (
          <>
            <h1>Historial de reservas</h1>
            <div id="booking">
              {bookings.map((apartamentBooking) => (
                <CardApartment
                  key={apartamentBooking.apartment.id}
                  image={apartamentBooking.apartment.image}
                  name={apartamentBooking.apartment.name}
                  description={apartamentBooking.apartment.description}
                  date={apartamentBooking.apartment.date}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Profile;
