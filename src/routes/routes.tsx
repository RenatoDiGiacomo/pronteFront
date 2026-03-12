import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { AuthRoute } from "./guards/AuthRoute";
import { PublicRoute } from "./guards/PublicRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import ClientList from "../pages/ClientList/ClientList";
import Login from "../pages/Login/Login";

const isAuthenticated = true; // Simulação de autenticação

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PublicRoute isAuthenticated={isAuthenticated} />,
        children: [{ path: "/login", element: <Login /> }],
      },
      {
        element: <AuthRoute isAuthenticated={isAuthenticated} />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/clients", element: <ClientList /> },
        ],
      },
    ],
  },
]);
