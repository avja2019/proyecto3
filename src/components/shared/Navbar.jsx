import { Link, NavLink } from "react-router-dom"
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'disable'}`}
              to={"/"}>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'disable'}`}
              to={"/login"}>
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'disable'}`}
              to={"/register"}>
              Count
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'disable'}`}
              to={"/purchases"}>
              Purchases
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'disable'}`}
              to={"/Cart"}>
              Cart
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;