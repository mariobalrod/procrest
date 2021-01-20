import React from "react";
import './styles.css';
import useConnect from './connect';
import { Redirect } from "react-router-dom";
import LogoutIcon from '../../../assets/logOut.svg';

const Profile = () => {
  const { isAuth, isLoading, handleLogout } = useConnect();

  if (isLoading) return <>Loading...</>

  if (!isAuth) return (
    <Redirect to="/" />
  )
  return (
    <div>
      Profile
      <button className="logout" onClick={handleLogout}>
        <img src={LogoutIcon} alt="logout"/>
      </button>

    </div>
  );
};

export default Profile;
