
import React, { Fragment, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';


const Auth = () => {
  const { isLoggedIn } = useContext(UserContext);
  if (isLoggedIn) {
    return <Fragment><Outlet /></Fragment>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Auth;
