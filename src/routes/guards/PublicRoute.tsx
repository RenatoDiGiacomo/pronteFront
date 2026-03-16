import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export function PublicRoute() {
  const { isAuthenticated } = React.useContext(AuthContext) || {};

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
