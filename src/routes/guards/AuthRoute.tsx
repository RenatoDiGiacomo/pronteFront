import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React from "react";

export function AuthRoute() {
  const { isAuthenticated } = React.useContext(AuthContext) || {};

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // NO teste inserir uma HEADER de Menu
  return (
    <div>
      <div>HEADER</div>
      <Outlet />
    </div>
  );
}
