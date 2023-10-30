// import React from 'react'
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currectUser } = useSelector((state) => state.user);
  return currectUser ? <Outlet /> : <Navigate to='/sign-in' />;
}

export default PrivateRoute