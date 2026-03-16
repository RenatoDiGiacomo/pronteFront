import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { AuthRoute } from "./guards/AuthRoute";
import { PublicRoute } from "./guards/PublicRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import ClientList from "../pages/ClientList/ClientList";
import Login from "../pages/Login/Login";



// React.useContext dentro de cada rota para verificar se o 
// usuário está autenticado ou não, e redirecionar para a página de login caso não esteja autenticado.

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PublicRoute />,
        children: [{ path: "/login", element: <Login /> }],
      },
      {
        element: <AuthRoute />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/clients", element: <ClientList /> },
        ],
      },
    ],
  },
]);
