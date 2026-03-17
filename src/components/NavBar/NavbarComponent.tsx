import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CiLogout } from "react-icons/ci";

const NavbarComponent = () => {
  const { logout } = useAuth();

  return (
    <nav className="flex flex-col bg-gray-300 py-8 px-4 h-lvh justify-between">
      <ul>
        <li>Ajuste de tela</li>
        <li>
          <NavLink to="/">DashBoard</NavLink>
        </li>
        <li>
          <NavLink to="/clients">Clientes</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <button
            className="flex w-full align-middle gap-2 hover:bg-gray-200 p-2 transition duration-300 rounded cursor-pointer"
            onClick={logout}
          >
            <CiLogout color="red" className="self-center" />
            <p className="text-red-500 self-center">LogOut</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
