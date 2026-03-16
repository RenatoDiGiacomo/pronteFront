import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
import NavbarComponent from "../../components/NavBar/NavbarComponent";

export function AuthRoute() {
  const { isAuthenticated } = React.useContext(AuthContext) || {};

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // NO teste inserir uma HEADER de Menu
  return (
    <div className="flex flex-row">
      <NavbarComponent />
      <div className="w-full h-lvh bg-red-200 p-4">
        <Outlet />
      </div>
    </div>
  );
}
