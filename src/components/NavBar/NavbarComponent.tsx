import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavbarComponent = () => {
  const {logout} = useAuth()

  return (
    <nav className="flex flex-col bg-gray-300 p-4 h-lvh justify-between">
      <ul>
        <li>
          <NavLink to="/">DashBoard</NavLink>
        </li>
        <li>
          <NavLink to="/clients">Clientes</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={logout}>Desconectar</button>
          
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
