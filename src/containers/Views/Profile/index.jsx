import React from "react";
import './styles.css';
import useConnect from './connect';
import { Redirect } from "react-router-dom";

const Profile = () => {
  const { isAuth, isLoading } = useConnect();

  if (isLoading) return <>Loading...</>

  if (!isAuth) return (
    <Redirect to="/" />
  )
  return (
    <div>Profile</div>
  );
};

export default Profile;
