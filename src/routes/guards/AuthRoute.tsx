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
      <div className="w-full h-dvh bg-white p-4">
        <div className="bg-gray-100 w-full h-full p-4 rounded">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
